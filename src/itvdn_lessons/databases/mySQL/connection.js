const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8080;

const config = {
    user: 'root',
    password: 'admin',
    host: 'localhost',
    database: 'testdb',
    port: 3306,
    connectionLimit: 10
};

app.use((req, res) => {
    const pool = mysql.createPool(config);
    // pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results[0].solution);
    // });
    pool.query('SELECT * FROM items', function (error, results) {
        if (error) throw error;
        // console.log(results);
        res.send(results);
    });
});

app.listen(port, () => {
    console.log('server is running on port:', port);
});
