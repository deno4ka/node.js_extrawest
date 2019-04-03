import Person, {Gender} from './person';

describe('arrayUnitTests', () => {

    let arrToTest: Person[];

    const VOVA = new Person(41, 'Volodymyr', 'Zelensky', Gender.MAN);
    const PETR = new Person(53, 'Petro', 'Poroshenko', Gender.MAN);
    const YULIA = new Person(58, 'Yulia', 'Tymoshenko', Gender.WOMAN);

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
        expect(arrToTest.length).toBeGreaterThan(3);
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

    it('should check join to string', () => {
        expect('Volodymyr Zelensky 41 (male) & Yulia Tymoshenko 58 (female) & Petro Poroshenko 53 (male)')
            .toBe(arrToTest.join(' & '));
    });

    it('should check reverse to string', () => {
        expect('Petro Poroshenko 53 (male) & Yulia Tymoshenko 58 (female) & Volodymyr Zelensky 41 (male)')
            .toBe(arrToTest.reverse().join(' & '));
    });

    it('should check filter man only', () => {
        const expectedArray = arrToTest.filter((el) => {
            return el.gender === Gender.MAN;
        }, arrToTest);
        expect(expectedArray.length).toBeGreaterThanOrEqual(2);
    });

    it('should check sort by surname asc', () => {
        const expectedArr = new Array<Person>();
        expectedArr.push(PETR);
        expectedArr.push(YULIA);
        expectedArr.push(VOVA);
        const actualArr = arrToTest.sort((p1, p2) => {
            return p1.surname > p2.surname;
        });
        expect(expectedArr.length).toBe(actualArr);
    });

    // it('should check findIndex', () => {
    //     const index = arrToTest.findIndex((el) => {
    //         return el.name === VOVA.name;
    //     }, VOVA);
    //     expect(index).toBeGreaterThan(-1);
    // });

    // it('should check find', () => {
    //     const person = arrToTest.find((el) => {
    //         return el.name === VOVA.name;
    //     }, VOVA);
    //     expect(person).not.toBeUndefined();
    // });

    // it('should check ...', () => {
    //
    // });

});
