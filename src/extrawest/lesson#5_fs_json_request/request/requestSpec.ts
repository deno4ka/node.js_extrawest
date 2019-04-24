import {ObjectMapper} from 'json-object-mapper';
import IRequest from './IRequest';
import User from './model/user';
import RequestImpl from './requestImpl';

describe ('', () => {

    const requestImpl: IRequest = new RequestImpl();

    it ('should GET users', async () => {
        const response: string = await requestImpl.get('https://jsonplaceholder.typicode.com/users');
        expect(response).toBeDefined();
        // console.log('>> GET users response: ', response);
        const users: User[] = ObjectMapper.deserializeArray(User, response);
        expect(users.length).toBeGreaterThan(0);
        // console.log('>> users: ', users);
        // const user1: User = new User();
        // user1.userId = 1;
        // user1.name = 'Den';
        // user1.username = 'deno4ka';
        // user1.email = 'deno4ka@gmail.com';
        // user1.phone = '+380632396790';
        // user1.website = 'www.google.com';
        // user1.address = null;
        // user1.company = null;
        // const userJson: String = ObjectMapper.serialize(user1);
        // const userJson: String = ObjectMapper.serialize(users[0]);
        // console.log('>> userJson: ', userJson);
        // users.forEach((user: User) => {
        //     const userJson: String = ObjectMapper.serialize(user);
        //     console.log('>> userJson: ', userJson);
        // });
    });

    it ('should GET user', async () => {
        const response: string = await requestImpl.get('https://jsonplaceholder.typicode.com/users/1');
        expect(response).toBeDefined();
        console.log('>> GET user response: ', response);
        const user: User = ObjectMapper.deserialize(User, response);
        console.log('>> user: ', user);
        console.log('>> user.name: ', user.name);
        const userJson: String = ObjectMapper.serialize(user);
        console.log('>> userJson: ', userJson);
    });

    it ('should POST new post', async () => {
        const body: any = {
            body: 'bar',
            title: 'foo',
            userId: 1
        };
        const response: string = await requestImpl.post('https://jsonplaceholder.typicode.com/posts', body);
        expect(response).toBeDefined();
        // console.log('>> POST response: ', response);
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
        // console.log('>> PUT response: ', response);
    });

    it ('should DELETE post', async () => {
        const response: string = await requestImpl.delete('https://jsonplaceholder.typicode.com/posts/1');
        expect(response).toBeDefined();
        // console.log('>> DELETE response: ', response);
    });

});
