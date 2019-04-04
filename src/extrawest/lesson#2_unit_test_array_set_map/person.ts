import * as utils from 'util';

export default class Person {

    public age: number;
    public gender: Gender;
    public name: string;
    public surname: string;


    public constructor(age: number, name: string, surname: string, gender: Gender) {
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.surname = surname;
    }

    public toString = () => {
        return utils.format('%s %s %d (%s)', this.name, this.surname, this.age, this.gender);
        // return this.name + ' ' + this.surname + ' ' + this.age + ' (' + this.gender + ')';
    }

}

export enum Gender {
    MAN = 'male',
    WOMAN = 'female'
}
