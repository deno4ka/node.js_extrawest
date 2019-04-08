const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('Prehandler...');
//     next();
// });
//
// app.get('/', (req, res) => {
//     console.log('Main handler');
//     res.end();
// });
//
// app.get('/about', (req, res) => {
//     console.log('About handler');
//     res.end();
// });

const cookieParser = {
    getCookie: (req, res, next) => {
        let cookies = req.get('Cookie');
        let cookieCollection = cookies.split(';');
        let tempCookies = {};
        for (let i = 0; i < cookieCollection.length; i++) {
            let elem = cookieCollection[i];
            let pos = elem.indexOf('=');
            let key, value;
            if (pos !== -1) {
                key = elem.substring(0, pos);
                value = elem.substring(pos + 1);
            }
            tempCookies[key] = decodeURIComponent(value);
        }
        req.cookies = tempCookies;
        next();
    }
};

app.use('/', cookieParser.getCookie);

app.get('/', (req, res) => {
    console.log(req.cookies);
    // console.log(req.get('Cookie'));
});

app.get('/index', (req, res) => {
    console.log('Main handler');
    res.cookie('someCookie', 'this is some cookie!');
    res.cookie('anotherCookie', 'this is another cookie!');
    res.end();
});

app.listen(8080, () => {
    console.log('Server has started');
});
