import Person, {Gender} from './person';

describe('mapUnitTests', () => {

    let mapToTest: Map<string, Person>;

    const VOVA: Person = new Person(41, 'Volodymyr', 'Zelensky', Gender.MAN);
    const PETR: Person = new Person(53, 'Petro', 'Poroshenko', Gender.MAN);
    const YULIA: Person = new Person(58, 'Yulia', 'Tymoshenko', Gender.WOMAN);

    beforeEach(() => {
        mapToTest = new Map<string, Person>();
        mapToTest.set('Zelensky', VOVA);
        mapToTest.set('Tymoshenko', YULIA);
        mapToTest.set('Poroshenko', PETR);
    });

    it('should check set', () => {
        mapToTest.set('Lyashko', new Person(46, 'Oleh', 'Lyashko', Gender.MAN));
        expect(mapToTest.size).toBe(4);
    });

    it('should check clear', () => {
        mapToTest.clear();
        expect(mapToTest.size).toEqual(0);
    });

    it('should check get', () => {
        expect(mapToTest.get('Zelensky')).toEqual(VOVA);
    });

    it('should check delete', () => {
        mapToTest.delete('Tymoshenko');
        expect(mapToTest.size).toEqual(2);
        expect(mapToTest.get('Tymoshenko')).toBeUndefined();
    });

    it('should check has', () => {
        expect(mapToTest.has('Poroshenko')).toBeTruthy();
    });

    it('should check has not', () => {
        expect(mapToTest.has('Lyashko')).not.toBeTruthy();
    });

});
