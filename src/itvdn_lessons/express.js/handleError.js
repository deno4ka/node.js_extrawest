const express = require('express');

const app = express();
const port = 8080;

app.use((req, res, next) => {
    if (req.url === '/') {
        res.send('Hello');
    } else {
        next();
    }
});

app.use((req, res, next) => {
    if (req.url === '/forbidden') {
        next(new Error('Access denied!'));
    } else {
        next();
    }
});

app.use((req, res, next) => {
    if (req.url === '/test') {
        res.send('Test');
    } else {
        next();
    }
});

app.use((req, res, next) => {
    next(new Error('page not found!'));
});

app.use((err, req, res, next) => {
    res.status(500).send('Ooops... Something went wrong!');
    next(err.message);
});

app.listen(port, () => {
    console.log('app is running on port', port);
});
