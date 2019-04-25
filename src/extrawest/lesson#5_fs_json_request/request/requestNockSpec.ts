import 'reflect-metadata';
import {ObjectMapper} from 'json-object-mapper';
import User from './model/user';
import IRequest from './IRequest';
import RequestImpl from './requestImpl';
import nock from 'nock';

describe ('', () => {

    const usersResponse: string = __dirname + '\\..\\..\\..\\resources\\usersResponse.json';
    const userResponse: string = __dirname + '\\..\\..\\..\\resources\\userResponse.json';
    const newPostResponse: string = __dirname + '\\..\\..\\..\\resources\\newPostResponse.json';

    beforeAll(() => {
        // nock('https://jsonplaceholder.typicode.com')
        //     .get('/users').replyWithFile(200, usersResponse)
        //     .get('/users/1').replyWithFile(200, userResponse)
        //     .post('/posts', {body: 'bar', title: 'foo', userId: 1} ).replyWithFile(200, newPostResponse);
    });

    afterAll(() => {
        nock.restore();
    });

    const requestImpl: IRequest = new RequestImpl();

    it ('should GET nock users', async () => {
        const response: string = await requestImpl.get('https://jsonplaceholder.typicode.com/users');
        expect(response).toBeDefined();
        // console.log('>> GET nock users response: ', response);
        const users: User[] = ObjectMapper.deserializeArray(User, response);
        expect(users.length).toBeGreaterThan(0);
    });

    it ('should GET nock user', async () => {
        const response: string = await requestImpl.get('https://jsonplaceholder.typicode.com/users/1');
        expect(response).toBeDefined();
        // console.log('>> GET nock user response: ', response);
        const user: User = ObjectMapper.deserialize(User, response);
        // console.log('>> user: ', user);
        // console.log('>> user.name: ', user.name);
        const userJson: String = ObjectMapper.serialize(user);
        // console.log('>> userJson: ', userJson);
    });

    it ('should POST new post', async () => {
        const body: any = {
            body: 'bar',
            title: 'foo',
            userId: 1
        };
        const response: string = await requestImpl.post('https://jsonplaceholder.typicode.com/posts', body);
        expect(response).toBeDefined();
        // console.log('>> POST nock response: ', response);
    });

    it ('should PUT update post', async () => {
        const body: any = {
            body: 'bar',
            id: 1,
            title: 'foo',
            userId: 1
        };
        const response: string = await requestImpl.put('https://jsonplaceholder.typicode.com/posts/1', body);
        expect(response).toBeDefined();
        console.log('>> PUT response: ', response);
    });

    xit ('should DELETE post', async () => {
        const response: string = await requestImpl.delete('https://jsonplaceholder.typicode.com/posts/1');
        expect(response).toBeDefined();
        // console.log('>> DELETE response: ', response);
    });

});
