import fse from 'fs-extra';
import url from 'url';
import IFSSynchronous from './IFSSynchronous';

export default class FsExtraPlusMockFsImpl implements IFSSynchronous {

    public exists(path: string | Buffer | url.URL): boolean {
        try {
            fse.accessSync(path, fse.constants.R_OK | fse.constants.W_OK);
            return true;
        } catch (error) {
            return false;
        }
    }

    public read(path: string): Buffer {
        return fse.readFileSync(path);
    }

    public write(file: string | Buffer | url.URL | fse.promises.FileHandle, data: string | Buffer | Uint8Array,
                 options: object | string): void {
        return fse.writeFileSync(file, data, options);
    }

    public copyFile(src: string | Buffer | url.URL, dest: string | Buffer | url.URL, flags: number): void {
        return fse.copyFileSync(src, dest, flags);
    }

    // public watch(filename: string | Buffer | url.URL, options: string | object,
    //              listener: (eventType: any, filename: any) => ({} | undefined)): fse.FSWatcher {
    //     return fse.watch(filename, options, listener);
    // }

    public rename(oldPath: string | Buffer | url.URL, newPath: string | Buffer | url.URL): void {
        return fse.renameSync(oldPath, newPath);
    }

}
