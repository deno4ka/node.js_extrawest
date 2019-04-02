const utils = require('util');
function Base() {
    this.name = 'Base function';
}
Base.prototype.say = function() {
    console.log('Hello, this is a %s function', this.name);
};
function Derived() {
    this.name = 'Derived';
}
utils.inherits(Derived, Base);
Derived.prototype.getData = function() {
    console.log('Some data from Derived function');
};
let derived = new Derived();
derived.getData();
derived.say();
let user = {
    name: 'Ivan',
    age: 25,
    salary: 10000,
    bonus: 15
};
// %s - String, %d - Number, %j - JSON, %% - Symbol '%'
let str = utils.format('Hello, my name is %s. I\'m %d years old! My bonuses from the salary are %d%%',
    user.name, user.age, user.bonus);
console.log('Hello, my name is %s. I\'m %d years old! My bonuses from the salary are %d%%',
    user.name, user.age, user.bonus);
console.log(str);
console.log('%j', user);
let objInfo = utils.inspect(user);
console.log(objInfo);
let point = {
    name: 'A',
    x: 10,
    y: 20,
    inspect: function () {
        return utils.format('Point %s[%d:%d]', this.name, this.x, this.y);
    }
};
console.log(point);
let num = 10;
let und = null;
let arr = [1,2,3,4,5];
console.log('arr is array:', utils.isArray(arr));
console.log('arr is array', Array.isArray(arr));
console.log('obj is object:', utils.isObject(user));
console.log('obj is object:', (user != null && typeof user === 'object'));
console.log('num is number:', utils.isNumber(num));
console.log('num is number:', typeof num === 'number');
console.log('str is string:', utils.isString(str));
console.log('str is string:', typeof str === 'string');
console.log('und is NULL:', utils.isNull(und));
console.log('und is NULL:', und === null);
console.log('und is function:', utils.isFunction(und));
console.log('und is function:', typeof und === 'function');