import fs from 'fs';
import url from 'url';
import IFS from './IFS';

export default class FsPromisesImpl implements IFS {

    // fs.exists(path, callback) -> !!!Deprecated: Use fs.stat() or fs.access() instead.
    public exists(path: string | Buffer | url.URL, mode: number): Promise<void> {
        return fs.promises.access(path, mode);
    }

    public read(path: string): Promise<Buffer> {
        return fs.promises.readFile(path);
    }

    public write(file: string | Buffer | url.URL | fs.promises.FileHandle,
                 data: string | Buffer | Uint8Array, options: object | string): Promise<void> {
        return fs.promises.writeFile(file, data, options);
    }

    public copyFile(src: string | Buffer | url.URL, dest: string | Buffer | url.URL, flags: number): Promise<void> {
        return fs.promises.copyFile(src, dest, flags);
    }

}
