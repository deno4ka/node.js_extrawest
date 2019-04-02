const http = require('http');

let port = 8080;

let server = http.createServer((req, res) => {
    console.log('request');
    res.end('GET request path: ' + req.url);
}).listen(port);
