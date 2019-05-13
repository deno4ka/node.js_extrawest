import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import {ObjectMapper} from "json-object-mapper"
import nock from 'nock';

import IRequest from '../lesson#5_fs_json_request/request/IRequest';
import User from "../lesson#5_fs_json_request/request/model/user"

import RequestImpl from '../lesson#5_fs_json_request/request/requestImpl';

const usersResponse: string = __dirname + '\\..\\..\\..\\resources\\usersResponse.json';
const userResponse: string = __dirname + '\\..\\..\\..\\resources\\userResponse.json';
const newPostResponse: string = __dirname + '\\..\\..\\..\\resources\\newPostResponse.json';

nock('https://jsonplaceholder.typicode.com')
    .get('/users').replyWithFile(200, usersResponse)
    .get('/users/1').replyWithFile(200, userResponse)
    .post('/posts', {body: 'bar', title: 'foo', userId: 1} ).replyWithFile(200, newPostResponse);

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

app.use(flash());

app.get('/', (req: any, res: Response) => {
    res.send('Hello from Express.js');
});

app.get('/flash', (req: any, res: Response) => {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!');
    res.redirect('/connect-flash-test');
});

app.get('/connect-flash-test', (req: any, res: Response) => {
    res.send('test connect-flash: ' + req.flash('info'));
});

app.get('/get-users', async (req: Request, res: Response) => {
    const response: string = await requestImpl.get('https://jsonplaceholder.typicode.com/users');
    // res.send(response);
    // console.log('>> GET nock users response: ', response);
    const users: User[] = ObjectMapper.deserializeArray(User, response);
    res.render('users.hbs', {
        users
    });
});

app.post('/new-post', async (req: Request, res: Response) => {
    const response: string = await requestImpl.post('https://jsonplaceholder.typicode.com/posts', req.body);
    res.send(response);
});

app.put('/update-post', async (req: Request, res: Response) => {
    const response: string = await requestImpl.put('https://jsonplaceholder.typicode.com/posts/1', req.body);
    res.send(response);
});

app.delete('/delete-post', async (req: Request, res: Response) => {
    // const url: string = 'https://jsonplaceholder.typicode.com/posts/' + req.body.id;
    // console.log(url);
    const response: string = await requestImpl.delete(`https://jsonplaceholder.typicode.com/posts/${req.body.id}`);
    res.send(response);
});

app.listen(PORT);
