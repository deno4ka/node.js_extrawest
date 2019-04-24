export default interface IRequest {
    get(url: string): Promise<string>;
    post(url: string, body: any): Promise<string>;
    put(url: string, body: any): Promise<string>;
    delete(url: string): Promise<string>;
}
