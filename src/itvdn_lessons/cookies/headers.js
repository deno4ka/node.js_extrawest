const express = require('express');

const app = express();
const port = 8080;

app.use('/',(req, res) => {
    console.log('Cookies from client:', req.headers['cookie']);
    res.setHeader('Set-Cookie', 'TestHeader=HeaderValue');

    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log('Server is running on port:', port);
});
