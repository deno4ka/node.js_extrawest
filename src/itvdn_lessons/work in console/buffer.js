// let allocatedBuffer = Buffer.alloc(10);
// let nonAllocatedBuffer = Buffer.allocUnsafe(10);
// console.log('uninitialized buffer:', nonAllocatedBuffer);
// console.log('uninitialized buffer length:', nonAllocatedBuffer.length);
// console.log('allocated buffer:', allocatedBuffer);
// console.log('allocated buffer length:', allocatedBuffer.length);
//
// console.log(Buffer.byteLength('Hello world', 'utf-8'));
// let buff1 = Buffer.from([10,20,30,40,50,60,70,80,90]);
// let buff2 = Buffer.from('Hello world!!!', 'utf-8'); // 'ascii', 'utf', 'binary', 'base64', 'hex'
// let buff3 = Buffer.from([50,60,70,80,90,10,20,30,40]);
// console.log(buff1[2]);
// console.log('Compare buffer:', buff1.compare(buff2));
// console.log('index compare:', buff1.compare(buff3, 5, 9, 0, 4));
// let newBuff = Buffer.concat([buff1, buff2]);
// console.log(newBuff);
// console.log(Buffer.isBuffer(newBuff));
// let symb = buff2.indexOf('l');
// console.log('Position of symbol \'1\' from start', symb);
// symb = buff2.lastIndexOf('l');
// console.log('Position of symbol \'1\' from end', symb);

let arr1 = new Uint16Array(11);
const buf1 = Buffer.from(arr1.buffer);
let arr2 = new Uint16Array(4);
const buf2 = Buffer.from(arr2.buffer);
let arr4 = new Uint16Array(10);
const buf4 = Buffer.from(arr4.buffer);
buf1.write('123', 2, 2);
buf2.write('1234', 2, 3);
let budData = buf1.toString('utf-8', 2, 3);
console.log(budData);
let buf3 = Buffer.concat([buf1, buf2], 28);
console.log(buf3.toString());
buf2.copy(buf4, 0, 0, 3);
console.log(buf4.toString());