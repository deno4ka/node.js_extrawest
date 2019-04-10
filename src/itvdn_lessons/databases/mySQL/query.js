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
    pool.query('SELECT * FROM items', function (error, results) {
        if (error) {
            throw error;
        } else {
            let html = ``;
            results.forEach((item) => {
                html += `<h3> ${item.name} - ${item.description}</h3>`;
            });
            res.send(html);

            pool.end((error) => {
                if (error) throw error;
            });
        }
    });
});

app.listen(port, () => {
    console.log('server is running on port:', port);
});
