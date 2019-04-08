const express = require('express');

const app = express();

app.get('/category/:categoryId', (req, res) => {
    console.log(req.params);
});

app.get('/category/:categoryId/product/:productId', (req, res) => {
    console.log(`category: ${req.params['categoryId']}`);
    console.log(`product: ${req.params['productId']}`);
});

app.listen(8080);
