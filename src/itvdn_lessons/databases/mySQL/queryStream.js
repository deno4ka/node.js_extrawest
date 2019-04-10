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
    let html = ``;
    const pool = mysql.createPool(config);
    let query = pool.query('SELECT * FROM items');
    query
        .on('error', (error) => {
            console.log(error);
        })
        .on('fields', (fields) => {
            // console.log(fields);
        })
        .on('result', (row) => {
            html += `<h2>${row.id} ${row.name} ${row.description}</h2>`;
        })
        .on('end', () => {
            res.send(html);
            console.log('All done');
        });
});

app.listen(port, () => {
    console.log('server is running on port:', port);
});
