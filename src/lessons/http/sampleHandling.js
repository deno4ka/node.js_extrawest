const http = require('http');

http.createServer((req, res) => {
    switch (req.method) {
        case 'GET': {
            let response_text = 'GET request to path ' + req.url;
            console.log(response_text);
            res.end(response_text);
            break;
        }
        case 'POST': {
            let response_text = 'POST request to path ' + req.url;
            console.log(response_text);
            res.end(response_text);
            break;
        }
    }
}).listen(8080);
