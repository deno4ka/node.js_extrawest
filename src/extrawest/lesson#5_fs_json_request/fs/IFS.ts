import fs from 'fs';
import url from 'url';

export default interface IFS {
    exists(path: string | Buffer | url.URL): Promise<boolean>;
    read(path: string): Promise<Buffer>;
    write(file: string | Buffer | url.URL | fs.promises.FileHandle,
          data: string | Buffer | Uint8Array, options: object | string): Promise<void>;
    copyFile(src: string | Buffer | url.URL, dest: string | Buffer | url.URL, flags: number): Promise<void>;
    watch(filename: string | Buffer | url.URL, options: string | object,
          listener: (eventType: any, filename: any) => {} | undefined): fs.FSWatcher;
    rename(oldPath: string | Buffer | url.URL, newPath: string | Buffer | url.URL): Promise<void>;
}
