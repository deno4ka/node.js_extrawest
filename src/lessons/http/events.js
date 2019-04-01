let http = require('http');
let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World!');
    response.end();
}).listen(8080, () => {
    console.log('Server running on port 8080');
});
