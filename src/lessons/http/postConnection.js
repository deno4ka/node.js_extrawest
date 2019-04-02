const http = require('http');

let postData = 'This is sample POST data!';
let port = 8080;

let config = {
    host: 'localhost',
    port: port,
    method: 'POST',
    headers: {'Content-Type':'text/plain'}
};

let req = http.request(config, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    })
});

req.write(postData);
req.end();

console.log('server is running on port ' + port);