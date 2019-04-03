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
        const filteredArr = arrToTest.filter((el) => {
            return el.gender === Gender.MAN;
        });
        expect(filteredArr.length).toBeGreaterThanOrEqual(2);
    });

    it('should check sort by surname asc', () => {
        const expectedArr = new Array<Person>();
        expectedArr.push(PETR);
        expectedArr.push(YULIA);
        expectedArr.push(VOVA);
        arrToTest.sort((p1, p2) => {
            if (p1.surname > p2.surname) { return 1; }
            if (p1.surname < p2.surname) { return -1; }
            return 0;
        });
        expect(expectedArr).toEqual(arrToTest);
    });

    it('should check includes for true', () => {
        expect(arrToTest.includes(VOVA)).not.toBeFalsy();
    });

    it('should check indexOf element', () => {
        arrToTest.push(VOVA);
        arrToTest.push(PETR);
        expect(arrToTest.indexOf(VOVA)).not.toBeLessThan(0);
        expect(arrToTest.indexOf(YULIA)).toEqual(1);
        expect(arrToTest.indexOf(PETR)).not.toBeGreaterThan(2);
    });

    it('should check indexOf element', () => {
        arrToTest.push(VOVA);
        arrToTest.push(PETR);
        expect(arrToTest.lastIndexOf(VOVA)).toBe(3);
        expect(arrToTest.lastIndexOf(YULIA) === 1).not.toBeFalsy();
        expect(arrToTest.lastIndexOf(PETR) === 4).toBeTruthy();
    });

    it('should check forEach', () => {
        // change gender :)
        arrToTest.forEach((el) => {
            el.gender === Gender.MAN ? el.gender = Gender.WOMAN : el.gender = Gender.MAN;
        });
        let filteredArray = arrToTest.filter((el) => {
            return el.gender === Gender.MAN;
        });
        expect(filteredArray.length).toEqual(1);

        // rollback changes :)
        arrToTest.forEach((el) => {
            el.gender === Gender.MAN ? el.gender = Gender.WOMAN : el.gender = Gender.MAN;
        });
        filteredArray = arrToTest.filter((el) => {
            return el.gender === Gender.MAN;
        });
        expect(filteredArray.length).toEqual(2);
    });

    it('should check map', () => {
        const personAges = arrToTest.map((el) => {
            return el.age;
        });
        expect(personAges).toBeDefined();
        expect(personAges.length).toBe(3);
        // expect(personAges).toBeInstanceOf(Array); // doesn't work!!!
    });

    // doesn't work!!!
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
