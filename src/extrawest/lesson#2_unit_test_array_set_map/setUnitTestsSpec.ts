import Person, {Gender} from './person';

describe('setUnitTests', () => {

    let setToTest: Set<Person>;

    const VOVA = new Person(41, 'Volodymyr', 'Zelensky', Gender.MAN);
    const PETR = new Person(53, 'Petro', 'Poroshenko', Gender.MAN);
    const YULIA = new Person(58, 'Yulia', 'Tymoshenko', Gender.WOMAN);

    beforeEach(() => {
        setToTest = new Set<Person>();
        setToTest.add(VOVA);
        setToTest.add(YULIA);
        setToTest.add(PETR);
    });

    it('should check size', () => {
        expect(setToTest.size).toBe(3);
    });

    it('should check size', () => {
        setToTest.clear();
        expect(setToTest.size).toEqual(0);
    });

    it('should check add similar object', () => {
        setToTest.add(YULIA);
        expect(setToTest.size).toBe(3);
    });

    it('should check add different object', () => {
        setToTest.add(new Person(41, 'Volodymyr', 'Zelensky', Gender.MAN));
        expect(setToTest.size).toBe(4);
    });

    it('should check add null', () => {
        setToTest.add(null);
        expect(setToTest.size).toBe(4);
    });

    it('should check add null twice', () => {
        setToTest.add(null);
        setToTest.add(null);
        expect(setToTest.size).toBe(4);
    });

    it('should check has', () => {
        expect(setToTest.has(PETR)).toBeTruthy();
    });

    it('should check has not null', () => {
        expect(setToTest.has(null)).toBeFalsy();
    });

    it('should check has null', () => {
        setToTest.add(null);
        expect(setToTest.has(null)).toBeTruthy();
    });

    it('should check delete', () => {
        setToTest.delete(YULIA);
        expect(setToTest.has(YULIA)).not.toBeTruthy();
    });

    it('should check forEach', () => {
        setToTest.forEach((el) => {
            el.age *= 2;
        });
        expect(VOVA.age).toBe(41 * 2);
        // revert aging
        setToTest.forEach((el) => {
            el.age /= 2;
        });
        expect(PETR.age).toEqual(53);
    });

    // cannot find methods union, subset & difference

});
