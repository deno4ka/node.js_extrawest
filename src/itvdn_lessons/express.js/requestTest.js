const http = require('http');
const port = 8080;
const options = {
    port: port,
    host: 'localhost',
    method: 'POST',
    path: '/?a=1',
    headers: {'Content-Type':'text/html'}
};

http.get(options);
