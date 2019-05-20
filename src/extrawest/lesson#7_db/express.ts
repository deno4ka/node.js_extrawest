import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';

import {ObjectMapper} from 'json-object-mapper';
import nock from 'nock';
import Handlebars from 'handlebars';

import IRequest from '../lesson#5_fs_json_request/request/IRequest';
import User from '../lesson#5_fs_json_request/request/model/user';

import RequestImpl from '../lesson#5_fs_json_request/request/requestImpl';
import PostJson from './model/json/postJson';
import Post from './model/db/post';
import DB from './db';

// const usersResponse: string = __dirname + '\\..\\..\\..\\resources\\usersResponse.json';
// const userResponse: string = __dirname + '\\..\\..\\..\\resources\\userResponse.json';
// const newPostResponse: string = __dirname + '\\..\\..\\..\\resources\\newPostResponse.json';

// nock('https://jsonplaceholder.typicode.com')
//     .get('/users').replyWithFile(200, usersResponse)
//     .get('/users/1').replyWithFile(200, userResponse)
//     .post('/posts', {body: 'bar', title: 'foo', userId: 1} ).replyWithFile(200, newPostResponse);

const app: Application = express();

const requestImpl: IRequest = new RequestImpl();

const PORT: number = 8080;
const SESSION_PARAMS: any = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

app.use(session(SESSION_PARAMS));

// app.use(flash());

app.get('/', (req: any, res: Response) => {
    res.send('Hello from Express.js');
});

app.get('/get-posts', async (req: Request, res: Response) => {
    const posts: Post[] = await DB.getPosts();
    if (posts.length === 0) {
        console.log('Getting posts from API');
        const response: string = await requestImpl.get('https://jsonplaceholder.typicode.com/posts');
        // console.log('> GET posts response: ', response);
        const responsePosts: PostJson[] = ObjectMapper.deserializeArray(PostJson, response);
        // console.log('>> deserialized posts: ', responsePosts);
        console.log('Saving post from API to DB');
        for (const responsePost of responsePosts) { // add responsePosts to DB
            const post: Post = new Post();
            post.title = responsePost.title;
            post.body = responsePost.body;
            post.userId = responsePost.userId;
            // console.log('>>> post to add: ', post);
            posts.push(await DB.addPost(post));
        }
    }
    // console.log('>>>> posts: ', posts);
    // const viewsDir: string = __dirname + '\\..\\..\\..\\..\\resources\\views\\';
    // const response: string = await requestImpl.get('https://jsonplaceholder.typicode.com/posts');
    // console.log('>> GET nock posts response: ', response);
    // const posts: Post[] = ObjectMapper.deserializeArray(Post, response);
    res.send(posts);
    // res.render(viewsDir + 'users.hbs', {
    //     users: [{name: 'Den'}, {name: 'Ivan'}]
    // });
});

app.get('/get-post/:postId', async (req: Request, res: Response) => {
    const KEY_NAME: string = 'postId';
    const postId: number = req.params[KEY_NAME];
    // console.log('> postId: ' + postId);
    let post: Post = await DB.getPost(postId);
    if (null === post) {
        console.log(`Getting posts with id=${postId} from API`);
        const response: string = await requestImpl.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const responsePost: PostJson = ObjectMapper.deserialize(PostJson, response);
        // console.log('>> deserialized post: ', responsePost);
        // console.log('Saving post from API to DB');
        post = new Post();
        post.title = responsePost.title;
        post.body = responsePost.body;
        post.userId = responsePost.userId;
        post = await DB.addPost(post);
        // console.log('>>> post saved: ', post);
    }
    res.send(post);
});

app.post('/new-post', async (req: Request, res: Response) => {
    console.log('adding new post');
    const post: Post = new Post();
    post.title = req.body.title;
    post.body = req.body.body;
    post.userId = req.body.userId;
    await DB.addPost(post);
    res.sendStatus(200).json({status: 'ok'});
    console.log('post added!');
});

app.put('/update-post', async (req: Request, res: Response) => {
    let post: Post = await DB.getPost(req.body.id);
    if (null === post) {
        console.log('adding new post');
        post = new Post();
        post.title = req.body.title;
        post.body = req.body.body;
        post.userId = req.body.userId;
        await DB.addPost(post);
        console.log('post added!');
    } else {
        console.log('updating old post');
        await DB.updatePost(post);
        console.log('post updated!');
    }
    res.sendStatus(200).json({status: 'ok'});
});

// app.delete('/delete-post', async (req: Request, res: Response) => {
//     // const url: string = 'https://jsonplaceholder.typicode.com/posts/' + req.body.id;
//     // console.log(url);
//     const response: string = await requestImpl.delete(`https://jsonplaceholder.typicode.com/posts/${req.body.id}`);
//     res.send(response);
// });

app.listen(PORT);
