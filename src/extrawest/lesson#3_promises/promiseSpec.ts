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

    // beforeEach(() => {
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // });

    xit('should getRandomNumber from 1 to 10', (done) => {
        const promise: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        promise.then( (res) => {
            // console.log('getRandomNumber=' + res);
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

    it('should getRandomNumber by three parallel promises from 3 to 30', (done) => {
        const promiseFirst: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseSecond: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseThird: Promise<number> = promiseImpl.getRandomNumber(MIN, MAX);
        const promiseArray: any = Promise.all([promiseFirst, promiseSecond, promiseThird]);
        promiseArray.then((res) => {
            // console.log(res);
            expect(res).toBeDefined();
            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toBe(3);
            const total: number = res.reduce((sum, el) => {
                return sum + el;
            }, 0);
            // console.log(total);
            expect(total).toBeGreaterThanOrEqual(MIN * ITERATIONS);
            expect(total).toBeLessThanOrEqual(MAX * ITERATIONS);
            done();
        }).catch((err) => {
            console.error(err);
            fail(err);
            done();
        });
    });

});
