import { promisify } from 'util';
import IPromise from './Ipromise';
import PromiseImpl from './promiseImpl';

describe('promise', () => {

    const   MIN: number         = 1,
            MAX: number         = 10,
            ITERATIONS: number  = 3;
    const promiseImpl: IPromise = new PromiseImpl();

    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    // POSITIVE CASES
    xit('should getRandomNumber from 1 to 10', (done) => {
        const promise: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        promise.then( (res) => {
            expect(res).toBeDefined();
            expect(res).toBeGreaterThanOrEqual(MIN);
            expect(res).toBeLessThanOrEqual(MAX);
            done();
        }).catch( (err) => {
            console.error(err);
            fail(err);
            done();
        });
    });

    // before refactoring version
    xit('should getRandomNumber by three serial promises from 3 to 30', (done) => {
        let sum: number = 0;
        const promiseFirst: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        promiseFirst.then( (resFirst) => {
            expect(resFirst).toBeDefined();
            sum += resFirst;
            const promiseSecond: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
            promiseSecond.then((resSecond) => {
                expect(resSecond).toBeDefined();
                sum += resSecond;
                const promiseThird: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
                promiseThird.then((resThird) => {
                    expect(resThird).toBeDefined();
                    sum += resThird;
                    expect(sum).toBeGreaterThanOrEqual(MIN * ITERATIONS);
                    expect(sum).toBeLessThanOrEqual(MAX * ITERATIONS);
                    done();
                }).catch((err) => {
                    console.error(err);
                    fail(err);
                    done();
                });
            }).catch((err) => {
                console.error(err);
                fail(err);
                done();
            });
        }).catch( (err) => {
            console.error(err);
            fail(err);
            done();
        });
    });

    // after refactoring version 1
    xit('should getRandomNumber by three serial promises from 3 to 30', (done) => {
        let sum: number = 0;
        promiseImpl.getRandomNumber(MIN, MAX)
            .then( (resFirst) => {
            expect(resFirst).toBeDefined();
            sum += resFirst;
            return promiseImpl.getRandomNumber(MIN, MAX);
        }).then((resSecond) => {
            expect(resSecond).toBeDefined();
            sum += resSecond;
            return promiseImpl.getRandomNumber(MIN, MAX);
        }).then((resThird) => {
            expect(resThird).toBeDefined();
            sum += resThird;
            return sum;
        }).then((sumTotal) => {
            expect(sumTotal).toBeGreaterThanOrEqual(MIN * ITERATIONS);
            expect(sumTotal).toBeLessThanOrEqual(MAX * ITERATIONS);
            done();
        }).catch( (err) => {
            console.error(err);
            fail(err);
            done();
        });
    });

    // after refactoring version 2
    xit('should getRandomNumber by three serial promises from 3 to 30', (done) => {
        let sum: number = 0;
        promiseImpl.getRandomNumber(MIN, MAX)
            .then( (resFirst) => {
            expect(resFirst).toBeDefined();
            sum += resFirst;
            return promiseImpl.getRandomNumber(MIN, MAX);
        }).then((resSecond) => {
            expect(resSecond).toBeDefined();
            sum += resSecond;
            return promiseImpl.getRandomNumber(MIN, MAX);
        }).then((resThird) => {
            expect(resThird).toBeDefined();
            sum += resThird;
            return sum;
        }).then((sumTotal) => {
            expect(sumTotal).toBeGreaterThanOrEqual(MIN * ITERATIONS);
            expect(sumTotal).toBeLessThanOrEqual(MAX * ITERATIONS);
            done();
        }).catch( (err) => {
            console.error(err);
            fail(err);
            done();
        });
    });

    // before refactoring
    xit('should getRandomNumber by three parallel promises from 3 to 30', (done) => {
        const promiseFirst: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseSecond: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseThird: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseArray: any = Promise.all([promiseFirst, promiseSecond, promiseThird]);
        promiseArray.then((res) => {
            expect(res).toBeDefined();
            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(3);
            const total: number = res.reduce((sum, el) => {
                return sum + el;
            }, 0);
            expect(total).toBeGreaterThanOrEqual(MIN * ITERATIONS);
            expect(total).toBeLessThanOrEqual(MAX * ITERATIONS);
            done();
        }).catch((err) => {
            console.error(err);
            fail(err);
            done();
        });
    });

    // after refactoring version 1
    it('should getRandomNumber by three parallel promises from 3 to 30', (done) => {
        const promiseFirst: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseSecond: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseThird: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseArray: any = Promise.all([promiseFirst, promiseSecond, promiseThird]);
        promiseArray.then((res) => {
            expect(res).toBeDefined();
            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(3);
            return res;
        }).then((total) => {
            const totalSum: number = total.reduce((sum, el) => {
                return sum + el;
            }, 0);
            expect(totalSum).toBeGreaterThanOrEqual(MIN * ITERATIONS);
            expect(totalSum).toBeLessThanOrEqual(MAX * ITERATIONS);
            done();
        }).catch((err) => {
            console.error(err);
            fail(err);
            done();
        });
    });

    xit('should check promisified method', (done) => {
        const getRandomNumberPromisified: (arg1: number, arg2: number) => Promise<number> =
            promisify(promiseImpl.getRandomNumberWithoutPromise);
        getRandomNumberPromisified(MIN, MAX).then((res) => {
            // console.log(res);
            expect(res).toBeDefined();
            expect(res).toBeGreaterThanOrEqual(MIN);
            expect(res).toBeLessThanOrEqual(MAX);
            done();
        }).catch( (err) => {
            console.error(err);
            fail(err);
            done();
        });
    });
    // END OF POSITIVE CASES

    // NEGATIVE CASES
    xit('should fail getRandomNumber from 1 to 10', (done) => {
        const promise: Promise<number> = promiseImpl.getRandomNumberFail(MIN, MAX);
        promise.then( (res) => {
            fail('test fails...');
            done();
        }).catch( (err) => {
            expect(err).toBeDefined();
            expect(err).toEqual('something went wrong...');
            done();
        });
    });

    xit('should fail getRandomNumber by three parallel promises from 3 to 30', (done) => {
        const promiseFirst: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseSecond: Promise<number> = promiseImpl.getRandomNumberFail(MIN, MAX);
        const promiseThird: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseArray: any = Promise.all([promiseFirst, promiseSecond, promiseThird]);
        promiseArray.then((res) => {
            fail('test fails...');
            done();
        }).catch((err) => {
            expect(err).toBeDefined();
            expect(err).toEqual('something went wrong...');
            done();
        });
    });
    // END OF NEGATIVE CASES

});
