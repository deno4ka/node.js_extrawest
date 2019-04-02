const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let path = url.parse(req.url).pathname;
    path = path.substr(1);

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end('Not found!');
        } else {
            res.writeHead(200, { 'Content-Type' : 'text/html' });
            res.write(data.toString());
            console.log('data was sent');
            res.end();
        }
    });
}).listen(8080, () => {
    console.log('Server starting!');
});
