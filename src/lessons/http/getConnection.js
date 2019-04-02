const http = require('http');

let port = 8080;

console.log('Server is running on port ' + port);

let config = {
    host: 'localhost',
    port: port,
    path: '/testConnection'
};

let req = http.request(config, (response) => {
    let body = '';
    response.on('data', (data) => {
        body += data;
    });

    response.on('end', () => {
        console.log(body);
    })
});

req.end();