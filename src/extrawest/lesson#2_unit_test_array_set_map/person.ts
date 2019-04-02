export default class Person {

    public age: number;
    public name: string;
    public surname: string;

    public constructor(age: number, name: string, surname: string) {
        this.age = age;
        this.name = name;
        this.surname = surname;
    }

    public toString = () => {
        return this.name + ' ' + this.surname + ' ' + this.age;
    }

}
