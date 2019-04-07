export default interface IPromise {

    getRandomNumber(min: number, max: number): Promise<number>;
    getRandomNumberFail(min: number, max: number): Promise<number>;
    getRandomNumberWithoutPromise(min: number, max: number): number;
    // getRandomNumberWithoutPromise(min: number, max: number, callback: (err, data) => {}): number;

}
