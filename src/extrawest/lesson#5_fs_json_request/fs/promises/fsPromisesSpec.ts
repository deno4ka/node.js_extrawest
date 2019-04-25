import fs from 'fs';
import 'reflect-metadata';
import FsPromisesImpl from './fsPromisesImpl';
import IFSPromises from './IFSPromises';

describe ('fileSystem with promises', () => {

    const fsPromisesImpl: IFSPromises = new FsPromisesImpl();
    const dirPath: string = __dirname + '\\..\\..\\..\\..\\resources\\';
    const positiveReadPath: string = __dirname + '\\..\\..\\..\\..\\resources\\test_read.txt';
    const negativeReadPath: string = __dirname + '\\..\\..\\..\\..\\resources\\file_not_exists.txt';
    const writePath: string = __dirname + '\\..\\..\\..\\..\\resources\\test_write.txt';
    const destPath: string = __dirname + '\\..\\..\\..\\..\\resources\\test_copy.txt';
    const renameSrcPath: string = __dirname + '\\..\\..\\..\\..\\resources\\test_rename.txt';
    const renameDstPath: string = __dirname + '\\..\\..\\..\\..\\!test_renamed!.txt';

    // POSITIVE CASES
    it('should exists file', async () => {
        const result: boolean = await fsPromisesImpl.exists(positiveReadPath);
        expect(result).toBeTruthy();
    });

    it('should read file', async () => {
        const buffer: Buffer = await fsPromisesImpl.read(positiveReadPath);
        expect(buffer).toBeDefined();
    });

    it ('should write file', async () => {
        await fsPromisesImpl.write(writePath, 'test data', null);
    });

    it ('should copy file', async () => {
        await fsPromisesImpl.copyFile(positiveReadPath, destPath, null);
    });

    it ('should watch folder/file', async () => {
        const watcher: fs.FSWatcher = fsPromisesImpl.watch(dirPath, null, null);

        // Event: 'change' -> emitted when something changes in a watched directory or file.
        watcher.on('change', (eventType: string, filename: string | Buffer) => {
            expect(eventType).toEqual('change');
            expect(filename).toEqual('test_read.txt');
            watcher.close();
        });

        // Event: 'close' -> emitted when the watcher stops watching for changes.
        watcher.on('close', () => {
            // console.log('>> event: close');
            watcher.close();
            expect().nothing();
        });

        // Event: 'error' -> emitted when an error occurs while watching the file.
        watcher.on('error', (error: string) => {
            console.log('>> error: ', error);
            watcher.close();
            fail('error while watch: ' + positiveReadPath + '\n' + error);
        });

        await fsPromisesImpl.write(positiveReadPath, 'test data', null);
    });

    it ('should rename file/folder', async () => {
        await fsPromisesImpl.rename(renameSrcPath, renameDstPath);
    });

    // END OF POSITIVE CASES

    // NEGATIVE CASES
    it ('should fail on exists()', async () => {
        const result: boolean = await fsPromisesImpl.exists(negativeReadPath);
        expect(result).toBeFalsy();
    });

});
