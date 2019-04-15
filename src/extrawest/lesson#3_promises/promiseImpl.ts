import IPromise from './Ipromise';

const TIMEOUT: number = 100;

export default class PromiseImpl implements IPromise {

    public constructor() {
        // non empty block :)
    }

    public getRandomNumber = (min: number, max: number): Promise<number> => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(Math.random() * (max - min) + min);
            }, TIMEOUT);
        });
    }

    public getRandomNumberFail = (min: number, max: number): Promise<number> => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                reject('something went wrong...');
            }, TIMEOUT);
        });
    }

    public getRandomNumberWithoutPromise = (min: number, max: number, callback): void => {
        setTimeout( () => {
            callback(null, Math.random() * (max - min) + min);
        }, TIMEOUT);
    }

}
