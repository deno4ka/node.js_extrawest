const express = require('express');
const fs = require('fs');

const app = express();
const path = 'resources/logger.txt';
const port = 8080;

app.use((req, res) => {
    let data = `Address : ${req.ip}; Time: ${new Date().toLocaleString()}; URL : ${req.url}\n`;
    fs.appendFile(path, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Data was written');
        }
    });
});

app.get('/', (req, res) => {
    console.log('Main handler');
    res.end();
});

app.listen(port, () => {
    console.log('Server has started');
});
