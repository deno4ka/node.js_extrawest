const express = require('express');

let app = express();

app.get('/[a-zA-Z]*\.html$/', (request, response) => {
    console.log(request.url);
    response.send(request.url);
    response.end();
});

app.listen(8080, () => {
    console.log('Server has started on port: 8080');
});