import fs from 'fs';
import mockFS from 'mock-fs';
import 'reflect-metadata';
import FsPromisesImpl from './fsPromisesImpl';
import IFS from './IFS';

describe ('fileSystem', () => {

    const fsPromisesImpl: IFS = new FsPromisesImpl();
    const positiveReadPath: string = __dirname + '\\..\\..\\resources\\test_read.txt';
    const negativeReadPath: string = __dirname + '\\..\\..\\resources\\file_not_exists.txt';
    const writePath: string = __dirname + '\\..\\..\\resources\\test_write.txt';
    const destPath: string = __dirname + '\\..\\..\\resources\\test_copy.txt';
    const renameSrcPath: string = __dirname + '\\..\\..\\resources\\test_rename.txt';
    const renameDstPath: string = __dirname + '\\..\\..\\!test_renamed!.txt';

    // POSITIVE CASES
    it('should exists file', async () => {
        try {
            await fsPromisesImpl.exists(positiveReadPath, fs.constants.R_OK | fs.constants.W_OK);
        } catch (error) {
            fail('file not exists: ' + error);
        }
    });

    it('should read file', async () => {
        try {
            const buffer: Buffer = await fsPromisesImpl.read(positiveReadPath);
            expect(buffer).toBeDefined();
        } catch (error) {
            fail('error while read file: ' + positiveReadPath + '\n' + error);
        }
    });

    it ('should write file', async () => {
        try {
            await fsPromisesImpl.write(writePath, 'test data', null);
        } catch (error) {
            fail('error while write file: ' + writePath + '\n' + error);
        }
    });

    it ('should copy file', async () => {
        try {
            await fsPromisesImpl.copyFile(positiveReadPath, destPath, null);
        } catch (error) {
            fail('error while copyFile: ' + positiveReadPath + '\n' + error);
        }
    });

    it ('should watch folder/file', async () => {
        const watcher: fs.FSWatcher = fsPromisesImpl.watch(positiveReadPath, null, null);

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
        try {
            await fsPromisesImpl.rename(renameSrcPath, renameDstPath);
        } catch (error) {
            fail('error while rename file/folder: src=' + renameSrcPath + ', dst=' + renameDstPath + '\n' + error);
        }
    });

    // END OF POSITIVE CASES

    // NEGATIVE CASES
    it ('should fail on exists()', async () => {
        try {
            await fsPromisesImpl.exists(negativeReadPath, fs.constants.R_OK | fs.constants.W_OK);
            fail('file should not exists!');
        } catch (error) {
            expect(error).toBeDefined();
            expect(error.code).toEqual('ENOENT'); // No such directory entry
        }
    });

});
