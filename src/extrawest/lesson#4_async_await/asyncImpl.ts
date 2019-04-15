import winston from 'winston';
import IAsync from './IAsync';

const TIMEOUT: number = 100;

const logger: any = winston.createLogger({
    defaultMeta: { service: 'user-service'},
    format: winston.format.json(),
    level: 'info',
    transports: [
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console({ format: winston.format.simple() })
    ]
});

export default class AsyncImpl implements IAsync {

    public constructor() {
        // non empty block :)
    }

    public getRandomNumber = async (min: number, max: number): Promise<number> => {
        try {
            await setTimeout( () => {
                // not empty block
            }, TIMEOUT);
            return Math.random() * (max - min) + min;
        } catch (error) {
            logger.error(error);
        }
    }

    public getRandomNumberFail = async (min: number, max: number): Promise<number> => {
        try {
            await setTimeout(() => {
                // not empty block
            }, TIMEOUT);
            return Promise.reject('something went wrong...');
        } catch (error) {
            logger.error(error);
        }
    }

    public getRandomNumberWithoutPromise = (min: number, max: number, callback): void => {
        setTimeout( () => {
            callback(null, Math.random() * (max - min) + min);
        }, TIMEOUT);
    }

}
