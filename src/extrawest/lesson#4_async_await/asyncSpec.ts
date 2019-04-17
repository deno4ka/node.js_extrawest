import { promisify } from 'util';
import AsyncImpl from './asyncImpl';
import IAsync from './IAsync';
import logger from './winstonConfig';

describe('promise', () => {

    const   MIN: number         = 1,
            MAX: number         = 10,
            ITERATIONS: number  = 3;
    const asyncImpl: IAsync = new AsyncImpl();

    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    // POSITIVE CASES
    it('should getRandomNumber from 1 to 10', async () => {
        const res: number = await asyncImpl.getRandomNumber(MIN, MAX);
        expect(res).toBeDefined();
        expect(res).toBeGreaterThanOrEqual(MIN);
        expect(res).toBeLessThanOrEqual(MAX);
    });

    it('should getRandomNumber by three serial promises from 3 to 30', async () => {
        let sum: number = 0;
        const resFirst: number = await asyncImpl.getRandomNumber(MIN, MAX);
        expect(resFirst).toBeDefined();
        sum += resFirst;
        const resSecond: number = await asyncImpl.getRandomNumber(MIN, MAX);
        expect(resSecond).toBeDefined();
        sum += resSecond;
        const resThird: number = await asyncImpl.getRandomNumber(MIN, MAX);
        expect(resThird).toBeDefined();
        sum += resThird;
        expect(sum).toBeGreaterThanOrEqual(MIN * ITERATIONS);
        expect(sum).toBeLessThanOrEqual(MAX * ITERATIONS);
    });

    it('should getRandomNumber by three parallel promises from 3 to 30', async () => {
        const promiseFirst: Promise<number> = asyncImpl.getRandomNumber(MIN, MAX);
        const promiseSecond: Promise<number> = asyncImpl.getRandomNumber(MIN, MAX);
        const promiseThird: Promise<number> = asyncImpl.getRandomNumber(MIN, MAX);
        const results: number[] = await Promise.all([promiseFirst, promiseSecond, promiseThird]);
        expect(results).toBeDefined();
        expect(Array.isArray(results)).toBeTruthy();
        expect(results.length).toBe(3);
        const totalSum: number = results.reduce((sum, el) => {
            return sum + el;
        }, 0);
        expect(totalSum).toBeGreaterThanOrEqual(MIN * ITERATIONS);
        expect(totalSum).toBeLessThanOrEqual(MAX * ITERATIONS);
    });

    it('should check promisified method', async () => {
        const getRandomNumberPromisified: (arg1: number, arg2: number) => Promise<number> =
            promisify(asyncImpl.getRandomNumberWithoutPromise);
        const res: number = await getRandomNumberPromisified(MIN, MAX);
        expect(res).toBeDefined();
        expect(res).toBeGreaterThanOrEqual(MIN);
        expect(res).toBeLessThanOrEqual(MAX);
    });
    // END OF POSITIVE CASES

    // NEGATIVE CASES
    it('should fail getRandomNumber from 1 to 10', async () => {
        try {
            const res: number = await asyncImpl.getRandomNumberFail(MIN, MAX);
            fail('test fails...');
            expect(res).toBeUndefined();
        } catch (error) {
            expect(error).toBeDefined();
            expect(error).toEqual('something went wrong...');
            logger.error(error);
        }
    });

    it('should fail getRandomNumber by three parallel promises from 3 to 30', async () => {
        try {
            const promiseFirst: Promise<number> = asyncImpl.getRandomNumber(MIN, MAX);
            const promiseSecond: Promise<number> = asyncImpl.getRandomNumberFail(MIN, MAX);
            const promiseThird: Promise<number> = asyncImpl.getRandomNumber(MIN, MAX);
            const results: number[] = await Promise.all([promiseFirst, promiseSecond, promiseThird]);
            fail('test fails...');
            expect(results).toBeUndefined();
        } catch (error) {
            expect(error).toBeDefined();
            expect(error).toEqual('something went wrong...');
        }
    });
    // END OF NEGATIVE CASES

});
