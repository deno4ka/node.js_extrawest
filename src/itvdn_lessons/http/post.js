const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

let port = 8080;
let data = [
        {name: 'Book',  price: 10},
        {name: 'Pen',   price: 20},
        {name: 'Lamp',  price: 30},
        {name: 'Pencil',price: 40},
        {name: 'Desk',  price: 50}
];
let server = http.createServer((req, res) => {
    req.on('error', (err) => {
        console.log(err);
    });
    if (req.url === '/') {
        let file_path = path.join(__dirname, 'index2.html');
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
    } else if (req.url === '/data') {
        let body = '';
        req.on('data', () => {
            body = data.toString();
            res.writeHead(200, {'Content-Type':'application/json'});
            res.write(JSON.stringify(data));
            res.end();
            console.log('data was sent!');
        });
    } else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('Resource not found');
    }
}).listen(port);

console.log('server is running on port ' + port);