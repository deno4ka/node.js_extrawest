import Person from './person';

describe('arrayUnitTests', () => {

    let arrToTest: Person[];

    const VOVA = new Person(41, 'Volodymyr', 'Zelensky');
    const PETR = new Person(53, 'Petro', 'Poroshenko');
    const YULIA = new Person(58, 'Yulia', 'Tymoshenko');

    beforeEach(() => {
        arrToTest = Array<Person>();
        arrToTest.push(VOVA);
        arrToTest.push(YULIA);
        arrToTest.push(PETR);
    });

    it('should check length', () => {
        expect(3).toBe(arrToTest.length);
        // expect('abc').toHaveLength(3); // WHY NOT?
        // expect(arrToTest).toHaveLength(3); // WHY NOT??
    });

    it('should check push', () => {
        arrToTest.push(null);
        expect(arrToTest.length).toBe(4);
    });

    it('should check pop', () => {
        expect(arrToTest.pop()).toEqual(PETR);
        expect(arrToTest.pop()).not.toEqual(VOVA);
    });

    it('should check isArray -> toBeTruthy or toBeFalsy', () => {
        expect(Array.isArray(arrToTest)).toBeTruthy();
        arrToTest = null;
        expect(Array.isArray(arrToTest)).toBeFalsy();
    });

    it('should check some people grater than 50 year old', () => {
        expect(arrToTest.some((el) => {
            return el.age > 50;
        })).toBe(true);
    });

    it('should check every grater than 50 year old', () => {
        expect(false).toEqual(arrToTest.every((el) => {
            return el.age > 50;
        }));
    });

    it('should check join', () => {
        expect('Volodymyr Zelensky 41, Yulia Tymoshenko 58, Petro Poroshenko 53').toBe(arrToTest.join(', '));
    });

    // it('should check findIndex', () => {
    //     const index = arrToTest.findIndex((el) => {
    //         return el.name === VOVA.name;
    //     }, VOVA);
    //     expect(index).toBeGreaterThan(-1);
    // });

    // it('should check ...', () => {
    //
    // });

});
