const express = require('express');
const http = require('http');
const path = require('path');

const port = 8080;
const app = express();

// app.get('/', (req, res) => {
//     res.cookie('someCookie', 'this is a cookie', {
//         httpOnly: true,
//         maxAge: 2000
//     });
//     res.cookie('anotherCookie', 'this is another cookie!');
//     res.clearCookie('anotherCookie');
//     res.sendFile(path.join(__dirname, '../http/index.html'))
// });

app.get('/', (req, res) => {
    res.locals.prop1 = 'this is a response property!';
    console.log(res.locals.prop1);
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Warning', '199 Miscellaneous warning');
    res.set('Cache-Control', 'no-cache');
    res.send('<h1>Sample Response</h1><h3>' + res.locals.prop1 + '</h3>');
});

app.listen(port, () => {
    console.log('Server has started on port:', port);
});
