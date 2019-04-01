let http = require('http');
let utils = require('util');

http.createServer((req, res) => {
    let requestInfo = utils.format('HTTPVersion: %s \nMethod: %s \nStatus: %s \nMessage: %s \nURL: %s',
        req.httpVersion, req.method, req.statusCode, req.statusMessage, req.url);
    console.log(requestInfo + '\n');
    // console.log();
    for(let key in req.headers) {
        console.log(key, ':', req.headers[key]);
    }
    res.end();
}).listen(8080, 'localhost');