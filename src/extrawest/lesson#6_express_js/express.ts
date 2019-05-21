import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import path from 'path';
import exphbs from 'express-handlebars';
import IRequest from '../lesson#5_fs_json_request/request/IRequest';
import RequestImpl from '../lesson#5_fs_json_request/request/requestImpl';

import {ObjectMapper} from 'json-object-mapper';
import nock from 'nock';
import User from '../lesson#5_fs_json_request/request/model/user';

const USERS_RESPONSE: string = __dirname + '\\..\\..\\resources\\usersResponse.json';
const USER_RESPONSE: string = __dirname + '\\..\\..\\resources\\userResponse.json';
const NEW_POST_RESPONSE: string = path.join(__dirname + '\\..\\..\\resources\\newPostResponse.json');
// const VIEWS_DIR: string = path.join(__dirname + '\\..\\..\\resources\\views\\');
// console.log('>>> VIEWS_DIR: ' + VIEWS_DIR);
// const PARTIALS_DIR: string = __dirname + '\\..\\..\\resources\\partials\\';
const requestImpl: IRequest = new RequestImpl();
const PORT: number = 8080;
const SESSION_PARAMS: any = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
};

// nock('https://jsonplaceholder.typicode.com')
//     .get('/users').replyWithFile(200, USERS_RESPONSE)
//     .get('/users/1').replyWithFile(200, USER_RESPONSE)
//     .post('/posts', {body: 'bar', title: 'foo', userId: 1} ).replyWithFile(200, NEW_POST_RESPONSE);

const app: Application = express();
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(session(SESSION_PARAMS));
app.use(flash());

// const hbs: Exphbs = exphbs.create({
//     helpers: {  // Specify helpers which are only registered on this instance.
//         foo: () => 'FOO!',
//         bar: () => 'BAR!'
//     }
// });
app.engine('.hbs', exphbs({extname: '.hbs',
    helpers: {
        user: (u) => `User: ${u.userId}, ${u.name}, ${u.username}, ${u.email}, ${u.phone}, ${u.website}`,
        company: (c) => `Company: ${c.name}, ${c.catchPhrase}, ${c.bs}`,
        address: (a) => `Address: ${a.street}, ${a.suite}, ${a.city}, ${a.zipcode}, `
    }}));
app.set('view engine', '.hbs');

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

app.get('/users', async (req: Request, res: Response) => {
    const response: string = await requestImpl.get('https://jsonplaceholder.typicode.com/users');
    // res.send(response);
    // console.log('>> GET nock users response: ', response);
    const users: User[] = ObjectMapper.deserializeArray(User, response);
    res.render('users', {
        layout: false,
        // users: [{name: 'Den'}, {name: 'Ivan'}]
        users
    });
});

app.post('/post', async (req: Request, res: Response) => {
    const response: string = await requestImpl.post('https://jsonplaceholder.typicode.com/posts', req.body);
    res.send(response);
});

app.put('/post', async (req: Request, res: Response) => {
    const response: string = await requestImpl.put('https://jsonplaceholder.typicode.com/posts/1', req.body);
    res.send(response);
});

app.delete('/post', async (req: Request, res: Response) => {
    // const url: string = 'https://jsonplaceholder.typicode.com/posts/' + req.body.id;
    // console.log(url);
    const response: string = await requestImpl.delete(`https://jsonplaceholder.typicode.com/posts/${req.body.id}`);
    res.send(response);
});

app.listen(PORT);
