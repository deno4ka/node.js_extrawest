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
