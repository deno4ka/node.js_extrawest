import arrayT from './arrayUnitTests';

describe('arrayUnitTests', () => {

    let arrToTest: any[];
    const USER = {
        name: 'Vladimir',
        surname: 'Zelenskiy'
    };

    beforeEach(() => {
        arrToTest = Array<any>();
    });

    it('should check push to array', () => {
        expect(0).toBe(arrToTest.length);
        arrToTest.push(USER);
        expect(1).toBe(arrToTest.length);
    });

    it('should check isArray -> toBeTruthy or toBeFalsy', () => {
        expect(Array.isArray(arrToTest)).toBeTruthy();
        arrToTest = null;
        expect(Array.isArray(arrToTest)).toBeFalsy();
    });

    it('should check findIndex', () => {
        arrToTest.push(USER);
        const index = arrToTest.findIndex((el) => {
            return el.name === USER.name;
        }, USER);
        expect(index).toBeGreaterThan(-1);
    });

    // it('should check ...', () => {
    //
    // });

});
