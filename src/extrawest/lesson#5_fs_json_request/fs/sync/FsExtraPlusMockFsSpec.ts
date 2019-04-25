import fse from 'fs-extra';
import mock from 'mock-fs';
import 'reflect-metadata';
import FsExtraPlusMockFsImpl from './FsExtraPlusMockFsImpl.js';
import IFSSynchronous from './IFSSynchronous';

describe ('fileSystem synchronous', () => {

    beforeAll(() => {
        mock(
            {
                'mock/': {
                    'empty-dir': {},
                    'test_read.txt': 'file content here',
                    'test_rename.txt': 'rename me ;)'
                }
            }
        );
    });

    const fsExtraPlusMockFsImpl: IFSSynchronous = new FsExtraPlusMockFsImpl();
    const dirPath: string = 'mock\\';
    const positiveReadPath: string = 'mock\\test_read.txt';
    const negativeReadPath: string = 'mock\\file_not_exists.txt';
    const writePath: string = 'mock\\test_write.txt';
    const destPath: string = 'mock\\test_copy.txt';
    const renameSrcPath: string = 'mock\\test_rename.txt';
    const renameDstPath: string = 'mock\\empty-dir\\!test_renamed!.txt';

    afterAll(() => {
        mock.restore();
    });

    // POSITIVE CASES
    it('should exists file', () => {
        const result: boolean = fsExtraPlusMockFsImpl.exists(positiveReadPath);
        expect(result).toBeTruthy();
    });

    it('should read file', () => {
        const buffer: Buffer = fsExtraPlusMockFsImpl.read(positiveReadPath);
        expect(buffer).toBeDefined();
    });

    it ('should write file', () => {
        fsExtraPlusMockFsImpl.write(writePath, 'test data', null);
    });

    it ('should copy file', () => {
        fsExtraPlusMockFsImpl.copyFile(positiveReadPath, destPath, null);
    });

    // it ('should watch folder/file', async () => {
    //     const watcher: fse.FSWatcher = fsExtraPlusMockFsImpl.watch(positiveReadPath, null, null);
    //
    //     // Event: 'change' -> emitted when something changes in a watched directory or file.
    //     watcher.on('change', (eventType: string, filename: string | Buffer) => {
    //         expect(eventType).toEqual('change');
    //         expect(filename).toEqual('test_read.txt');
    //         watcher.close();
    //     });
    //
    //     // Event: 'close' -> emitted when the watcher stops watching for changes.
    //     watcher.on('close', () => {
    //         // console.log('>> event: close');
    //         watcher.close();
    //         expect().nothing();
    //     });
    //
    //     // Event: 'error' -> emitted when an error occurs while watching the file.
    //     watcher.on('error', (error: string) => {
    //         console.log('>> error: ', error);
    //         watcher.close();
    //         fail('error while watch: ' + positiveReadPath + '\n' + error);
    //     });
    //
    //     await fsExtraPlusMockFsImpl.write(positiveReadPath, 'test data', null);
    // });

    it ('should rename file/folder', () => {
        fsExtraPlusMockFsImpl.rename(renameSrcPath, renameDstPath);
    });

    // END OF POSITIVE CASES

    // NEGATIVE CASES
    it ('should fail on exists()', () => {
        const result: boolean = fsExtraPlusMockFsImpl.exists(negativeReadPath);
        expect(result).toBeFalsy();
    });

});
