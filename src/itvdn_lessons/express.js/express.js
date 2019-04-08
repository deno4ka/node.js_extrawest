const express = require('express');

let app = express();

app.get('/', (request, response) => {
    console.log(request.url);
    response.send('<h1>Hello, world!</h1>');
});

app.get('/about', (request, response) => {
    console.log(request.url);
    response.send('<h1>About Page</h1>')
});

app.get('/products', (request, response) => {
    console.log(request.url);
    response.send('<h1>Products Page</h1>')
});

app.listen(8080, () => {
    console.log('server has started on port 8080');
});
