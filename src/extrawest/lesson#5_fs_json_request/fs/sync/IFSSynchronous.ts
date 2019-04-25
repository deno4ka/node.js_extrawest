import fse from 'fs-extra';
import url from 'url';

export default interface IFSPromises {
    exists(path: string | Buffer | url.URL): boolean;
    read(path: string): Buffer;
    write(file: string | Buffer | url.URL | fse.promises.FileHandle,
          data: string | Buffer | Uint8Array, options: object | string): void;
    copyFile(src: string | Buffer | url.URL, dest: string | Buffer | url.URL, flags: number): void;
    // watch(filename: string | Buffer | url.URL, options: string | object,
    //       listener: (eventType: any, filename: any) => {} | undefined): fse.FSWatcher;
    rename(oldPath: string | Buffer | url.URL, newPath: string | Buffer | url.URL): void;
}
