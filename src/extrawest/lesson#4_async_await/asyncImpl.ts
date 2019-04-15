import IAsync from './IAsync';
import logger from './winstonConfig';

const TIMEOUT: number = 100;

export default class AsyncImpl implements IAsync {

    public constructor() {
        // non empty block :)
    }

    public getRandomNumber = async (min: number, max: number): Promise<number> => {
        await setTimeout( () => {
            // not empty block
            logger.info('getRandomNumber');
        }, TIMEOUT);
        return Math.random() * (max - min) + min;
    }

    public getRandomNumberFail = async (min: number, max: number): Promise<number> => {
        await setTimeout(() => {
            // not empty block
        }, TIMEOUT);
        return Promise.reject('something went wrong...');
    }

    public getRandomNumberWithoutPromise = (min: number, max: number, callback): void => {
        setTimeout( () => {
            callback(null, Math.random() * (max - min) + min);
        }, TIMEOUT);
    }

}
