import fs from 'fs';
import url from 'url';

export default interface IFS {
    exists(path: string | Buffer | url.URL, mode: number): Promise<void>;
    read(path: string): Promise<Buffer>;
    write(file: string | Buffer | url.URL | fs.promises.FileHandle,
          data: string | Buffer | Uint8Array, options: object | string): Promise<void>;
    copyFile(src: string | Buffer | url.URL, dest: string | Buffer | url.URL, flags: number): Promise<void>;
}
