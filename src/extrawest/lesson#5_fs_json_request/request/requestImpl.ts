import 'reflect-metadata';
import RPN from 'request-promise-native';
import IRequest from './IRequest';

export default class RequestImpl implements IRequest {

    public get(url: string): Promise<string> {
        const options: any = {
            uri: url
        };
        return RPN(this.createDefaultOptions(options));
    }

    public createDefaultOptions(options: any): any  {
        return Object.assign({
            headers: { 'User-Agent': 'Request-Promise' },
            json: true, // Automatically parses the JSON string in the response
        }, options);
    }

    public post(url: string, body: any): Promise<string> {
        const options: any = {
            body,
            method: 'POST',
            uri: url
        };
        return RPN(this.createDefaultOptions(options));
    }

    public put(url: string, body: any): Promise<string> {
        const options: any = {
            body,
            method: 'PUT',
            uri: url
        };
        return RPN(this.createDefaultOptions(options));
    }

    public delete(url: string): Promise<string> {
        const options: any = {
            method: 'DELETE',
            uri: url
        };
        return RPN(this.createDefaultOptions(options));
    }

}
