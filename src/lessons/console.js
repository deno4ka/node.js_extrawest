let obj = {
    name: 'Denis',
    age: 35
};
console.log(obj);
console.dir(obj);
// console.error(new Error('I\'m error :('));

console.time('label');
let arr = [];
for (let i = 0; i < 9999999; i++) {
    arr[i] = (i + 1) * 2;
}
console.timeEnd('label');