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

}
