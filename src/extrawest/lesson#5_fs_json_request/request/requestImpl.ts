// import RPN from 'request-promise-native';
// import IRequest from './IRequest';
//
// const options: any = {
//     headers: { 'User-Agent': 'Request-Promise' },
//     json: true // Automatically parses the JSON string in the response
// };
//
// export default class RequestImpl implements IRequest {
//
//     public async get(): Promise<string> {
//         options.uri = 'https://reqres.in//api/users?page=2';
//         const res: any = await RPN(options);
//         console.log('res', res);
//         return res;
//             // .then((res) => {
//             //     console.log('User has %d repos', res.length);
//             //     console.log('res', res);
//             // })
//             // .catch((err) => {
//             //     console.log('error: ', err);
//             // });
//     }
//
//     public async post(): Promise<string> {
//         return await '';
//     }
//
//     public async put(): Promise<string> {
//         return await '';
//     }
//
//     public async delete(): Promise<string> {
//         return await '';
//     }
//
// }
