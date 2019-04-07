import IPromise from './Ipromise';

export default class PromiseImpl implements IPromise {

    public constructor() {
        // non empty block :)
    }

    public getRandomNumber = (min: number, max: number): Promise<number> => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(Math.random() * (max - min) + min);
            }, 3000);
        });
    }

    public getRandomNumberFail = (min: number, max: number): Promise<number> => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                reject('something went wrong...');
            }, 3000);
        });
    }

    // public getRandomNumberWithoutPromise = (min: number, max: number, callback: (err, data) => {}): number => {
    public getRandomNumberWithoutPromise = (min: number, max: number): number => {
        // return callback(null, Math.random() * (max - min) + min);
        return Math.random() * (max - min) + min;
    }

}
