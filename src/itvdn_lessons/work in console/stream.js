const fs = require('fs');
// let writeData = 'This is the file content';
//
// let writerStream = fs.createWriteStream('output.txt');
// writerStream.write(writeData, 'utf-8');
// writerStream.end();
// writerStream.on('finish', function () {
//     console.log('Write has been completed');
// });
// writerStream.on('error', function (err) {
//     console.log(err);
// });

// let readData = '';
// let readerStream = fs.createReadStream('output.txt');
// readerStream.setEncoding('UTF8');
// readerStream.on('data', function (chunk) {
//     readData += chunk;
// });
// readerStream.on('end', function () {
//     console.log(readData);
// });
// readerStream.on('error', function (err) {
//     console.log(err);
// });

fs.writeFile('input.txt', 'test...', function (err) {
    if (err) console.log(err);
});
let readerStream = fs.createReadStream('input.txt');
let writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);
writerStream.on('finish', function () {
    console.log('data written to file output.txt');
});