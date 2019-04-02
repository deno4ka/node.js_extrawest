const http = require('http');
const fs = require('fs');
const url = require('url');

let port = 8080;
let server = http.createServer((req, res) => {
    console.log(res);
    let body = '';
    req.on('error', (err) => {
        console.log(err);
    });
    req.on('data', (data) => {
        body = data.toString();
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(body);
        res.end();
        console.log(`data from request: ${body}`);
    })
}).listen(port);
