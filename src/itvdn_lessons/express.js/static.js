const express = require('express');
const path = require('path');

const app = express();
const port = 8080;
const catalog = 'resources/';

app.use('/', express.static(path.join(__dirname, catalog)));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, catalog, 'index.html'));
// });
//
// app.get('/test.js', (req, res) => {
//     res.sendFile(path.join(__dirname, catalog, 'test.js'));
// });

app.listen(port);
