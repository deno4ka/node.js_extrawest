export default class ArrayUnitTests<T> {

    private arr: T[];

    constructor(arr: T[]) {
        this.arr = arr;
    }

    public push(element: T) {
        this.arr.push(element);
    }

}
