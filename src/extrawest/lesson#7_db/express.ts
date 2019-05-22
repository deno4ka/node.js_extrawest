import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import exphbs from 'express-handlebars';
import {ObjectMapper} from 'json-object-mapper';
import url, {Url} from 'url';
import IRequest from '../lesson#5_fs_json_request/request/IRequest';
import RequestImpl from '../lesson#5_fs_json_request/request/requestImpl';
import PostJson from './model/json/postJson';
import Post from './model/db/post';
import Comment from './model/db/comment';
import DB from './db';

const requestImpl: IRequest = new RequestImpl();
const PORT: number = 8080;
const SESSION_PARAMS: any = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
};

const app: Application = express();
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(session(SESSION_PARAMS));

app.engine('.hbs', exphbs({extname: '.hbs',
    helpers: {
        post: (p: Post) => `<td>${p.id}</td><td>${p.userId}</td><td>${p.title}</td><td>${p.body}</td>`,
        comment: (c: Comment) => `Comment: ${c.postId}, ${c.commentId}, ${c.commentEmail}, ${c.commentName},
         ${c.commentBody}`,
    }}));
app.set('view engine', '.hbs');

app.get('/', (req: any, res: Response) => {
    res.send('Hello from Express.js');
});

app.get('/posts', async (req: Request, res: Response) => {
    // const data: Url = url.parse(req.url, true).query;
    // console.log('>>> data: ', data);
    // res.send(data);
    const posts: Post[] = await DB.getPosts();
    if (posts.length === 0) {
        console.log('Getting posts from API');
        const response: string = await requestImpl.get('https://jsonplaceholder.typicode.com/posts');
        const responsePosts: PostJson[] = ObjectMapper.deserializeArray(PostJson, response);
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
    res.render('posts.hbs', {
        layout: false,
        posts
    });
});

app.get('/posts/:postId', async (req: Request, res: Response) => {
    const KEY_NAME: string = 'postId';
    const postId: number = req.params[KEY_NAME];
    console.log('> postId: ' + postId);
    let post: Post = await DB.getPostById(postId);
    if (null === post) {
        console.log(`Getting posts with id=${postId} from API`);
        try {
            const response: string = await requestImpl.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const responsePost: PostJson = ObjectMapper.deserialize(PostJson, response);
            post = new Post();
            post.id = postId;
            post.title = responsePost.title;
            post.body = responsePost.body;
            post.userId = responsePost.userId;
            post = await DB.addPost(post);
        } catch (error) {
            console.log('Server error: ', error);
            res.send('Post not found!');
        }
    }
    const posts: Post[] = [];
    posts.push(post);
    res.render('posts', {
        layout: false,
        posts
    });
});

app.post('/posts', async (req: Request, res: Response) => {
    console.log('adding new post');
    const post: Post = new Post();
    post.title = req.body.title;
    post.body = req.body.body;
    post.userId = req.body.userId;
    await DB.addPost(post);
    res.sendStatus(200).json({status: 'ok'});
    console.log('post added!');
});

app.put('/posts', async (req: Request, res: Response) => {
    const existingPost: Post = await DB.getPostById(req.body.id);
    const post: Post = existingPost ? existingPost : new Post();
    if (null === existingPost) {
        post.id = req.body.id;
        post.title = req.body.title;
        post.body = req.body.body;
        post.userId = req.body.userId;
        console.log('adding new post');
        await DB.addPost(post);
        console.log('post added!');
    } else {
        console.log('updating old post');
        await DB.updatePost(post);
        console.log('post updated!');
    }
    res.sendStatus(200).json({status: 'ok'});
});

app.delete('/posts/:postId', async (req: Request, res: Response) => {
    await DB.deletePost(req.params.postId);
    res.sendStatus(200).json({status: 'ok'});
});

app.listen(PORT);
