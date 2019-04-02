const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

let port = 8080;

let server = http.createServer((req, res) => {
    req.on('error', (err) => {
        console.log(err);
    });
    if (req.url === '/') {
        let file_path = path.join(__dirname, 'index.html');
        fs.readFile(file_path, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {'Content-Type':'text/plain'});
                res.write('Not found!');
            } else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data.toString());
            }
            res.end();
        });
    } else if (req.url === '/request') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h2>Data from server!</h2>');
        res.end();
        console.log('data was sent!');
    } else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('Resource not found!');
    }
});

server.listen(port);
console.log('server is running on port ' + port);