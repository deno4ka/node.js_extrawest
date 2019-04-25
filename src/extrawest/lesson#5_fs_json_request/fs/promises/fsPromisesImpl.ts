import fs from 'fs';
import url from 'url';
import IFSPromises from './IFSPromises';

export default class FsPromisesImpl implements IFSPromises {

    // fs.exists(path, callback) -> !!!Deprecated: Use fs.stat() or fs.access() instead.
    public async exists(path: string | Buffer | url.URL): Promise<boolean> {
        try {
            await fs.promises.access(path, fs.constants.R_OK | fs.constants.W_OK);
            return true;
        } catch (error) {
            return false;
        }
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

    public watch(filename: string | Buffer | url.URL, options: string | object,
                 listener: (eventType: any, filename: any) => {} | undefined): fs.FSWatcher {
        return fs.watch(filename, options, listener);
    }

    public rename(oldPath: string | Buffer | url.URL, newPath: string | Buffer | url.URL): Promise<void> {
        return fs.promises.rename(oldPath, newPath);
    }

}
