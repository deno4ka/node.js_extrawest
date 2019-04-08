const express = require('express');

let app = express();
const port = 8080;

app.all('*', (req, res) => {
    console.log('method: ' + req.method);
    console.log('query: ' + req.query);
    console.log('protocol: ' + req.protocol);
    console.log('secure: ' + req.secure);
    console.log('accepts: ' + req.accepts(['text/html', 'application/json']));
    console.log('content type header: ' + req.get('Content-Type'));
    console.log('---------------------');
    res.end();
});

app.listen(port, () => {
    console.log('Server has started on port:', port);
});
