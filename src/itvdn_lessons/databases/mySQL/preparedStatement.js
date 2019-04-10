const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8080;

const config = {
    user: 'root',
    password: 'admin',
    host: 'localhost',
    database: 'testdb',
    port: 3306
};

// app.use((req, res) => {
//     const connection = mysql.createConnection(config);
//     connection.execute('SELECT * FROM `items` WHERE `id` = ?', [1], (err, results, fields) => {
//         if (err) throw err;
//         res.send(results);
//     });
// });

app.get('/item/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    // console.log(params.itemId);
    const connection = mysql.createConnection(config);
    connection.query('SELECT * FROM `items` WHERE `id` = ?', [itemId], (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log('server is running on port:', port);
});
