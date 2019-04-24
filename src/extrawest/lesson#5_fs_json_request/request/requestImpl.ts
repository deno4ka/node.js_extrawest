import RPN from 'request-promise-native';
import IRequest from './IRequest';

export default class RequestImpl implements IRequest {

    public get(url: string): Promise<string> {
        const options: any = {
            headers: { 'User-Agent': 'Request-Promise' },
            json: true, // Automatically parses the JSON string in the response
            uri: url
        };
        return RPN(options);
    }

    public post(url: string, body: any): Promise<string> {
        const options: any = {
            body,
            headers: { 'User-Agent': 'Request-Promise' },
            json: true, // Automatically parses the JSON string in the response
            method: 'POST',
            uri: url
        };
        return RPN(options);
    }

    public put(url: string, body: any): Promise<string> {
        const options: any = {
            body,
            json: true,
            method: 'PUT',
            uri: url
        };
        return RPN(options);
    }

    public delete(url: string): Promise<string> {
        const options: any = {
            method: 'DELETE',
            uri: url
        };
        return RPN(options);
    }

}
