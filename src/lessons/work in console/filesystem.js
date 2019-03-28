const fs = require('fs');
const utils = require('util');

// console.log('Going to open file!');
// fs.open('demofile.txt', 'w+', function(err, fd) {
//     console.log('opening file!');
//     if (err) {
//         console.log(err);
//     } else {
//         fs.write(fd, 'This is the file content!', {encoding: 'unf-8'}, function(err, written, string) {
//             console.log('writing to file!');
//             if (err) throw err;
//             console.log(written);
//             console.log(string);
//         });
//         let arr = new Uint16Array(1024);
//         let buf = Buffer.from(arr.buffer);
//         fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//             console.log('reading from file!');
//             if (err) throw err;
//             console.log(bytes);
//             console.log(buf.slice(0, bytes).toString());
//         });
//         fs.close(fd, function(err) {
//             if (err) throw err;
//             console.log('file closed!');
//         })
//     }
// });

// user = {
//     fName: 'Ivan',
//     lName: 'Ivanov',
//     age: 30,
//     position: 'developer'
// };
// console.log('File is writing...');
// fs.writeFile('text.txt', utils.format('%j', user), function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File was written!');
// });

// fs.exists('text.txt', function () {
//     fs.readFile('text.txt', {encoding: 'utf-8'}, function (err, data) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         let obj = JSON.parse(data);
//         console.log(obj.fName, obj.lName, obj.age, obj.position);
//     });
// });

// fs.readdir('../lessons', function (err, fileNames) {
//     console.log(fileNames);
// });

fs.watch('text.txt', function (event, filename) {
    console.log('File %s is %s.', filename, event);
});
fs.writeFile('text.txt', 'test string', function (err) {
    if (err) throw err;
    console.log('data was written');
});