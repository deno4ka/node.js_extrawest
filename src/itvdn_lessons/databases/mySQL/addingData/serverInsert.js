const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const displayHandler = require('./displayHandler');
const insertHandler = require('./insertHandler');

const app = express();
const port = 8080;

app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'pages')));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/', displayHandler.displayItems);

app.get('/add', insertHandler.loadAddPage);
app.post('/add/newItem', insertHandler.addRow);

app.use((err, req, res, next) => {
    if (err) console.log(err.stack);
    res.status(500).send('oops... something went wrong')
});

app.listen(port, () => {
    console.log('app is running on port:', port);
});
