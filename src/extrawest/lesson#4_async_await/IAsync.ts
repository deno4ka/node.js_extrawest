export default interface IAsync {

    getRandomNumber(min: number, max: number): Promise<number>;
    getRandomNumberFail(min: number, max: number): Promise<number>;
    getRandomNumberWithoutPromise(min: number, max: number, callback): void;

}
