const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');

const app = express();
const port = 8080;

app.use(express.static('resources/bodyParser'));

app.use(bodyParser.urlencoded({extended: true}));

app.route('/')
    .all((req, res) => {
        console.log('request to main page!');
        res.writeHead(301, {'Location': 'index.html'});
        res.end();
    });

app.route('/test')
    .get((req, res) => {
        let data = url.parse(req.url, true).query;
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data.text);
    })
    .post((req, res) => {
        let data = req.body.text;
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    });

app.listen(port, () => {
    console.log('Server was started!');
});
