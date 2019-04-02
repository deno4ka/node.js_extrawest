const http = require('http');
const URL = require('url');

// http.createServer((req, res) => {
//     let query = url.parse(req.url, true).query;
//     res.end('GET params: ' + JSON.stringify(query));
// }).listen(8080, () => {
//     console.log('Server running on port 8080');
// });

let server = http.createServer();
let port = 8080;
server.on('request', (req, res) => {
    let method = req.method;
    let url = req.url;
    console.log('Method:', method, '; URL:', url);
    let parsed = URL.parse(req.url, true);
    console.log(parsed);
    if (parsed.pathname === '/test' && parsed.query.message) {
        res.statusCode = 200; // OK
        res.end(parsed.query.message);
    } else {
        res.statusCode = 404; // Not found
        res.end('Page not found on server!');
    }
});

server.listen(port);

server.on('listening', () => {
    console.log('Server running on port ' + port);
});
