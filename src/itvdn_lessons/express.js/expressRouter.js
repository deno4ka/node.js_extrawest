const express = require('express');

const app = express();
const router = express.Router();
const port = 8080;

router.route('/')
    .get((req, res) => {
        res.send('List of products. GET method.');
    })
    .post((req, res) => {
        res.send('Product was created. POST method');
    });

router.route('/:id')
    .get((req, res) => {
        res.send(`Product ${req.params.id}`);
    });

app.use('/products', router);

app.get('/', (req, res) => {
    res.send('Main page');
});

app.listen(port, () => {
    console.log('Server was started');
});
