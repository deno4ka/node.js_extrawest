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

const pool = mysql.createPool(config);

app.get('/', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error;
        connection.beginTransaction((error) => {
            if (error) throw error;
            // connection.query('INSERT INTO `items` SET `name` = ?, `description` = ?',
            connection.query('INSERT INTO `items` (`name`, `description`) VALUES (?, ?)',
                ['name; DROP TABLE `items`;', 'description'], (error, results, fields) => {
                    if (error) {
                        return connection.rollback(() => {
                            throw error;
                        });
                    }

                    connection.commit((error) => {
                        if (error) {
                            return connection.rollback(() => {
                                throw error;
                            });
                        }
                    });
                    console.log('Transaction success!');
                });
        });
    });
});

app.listen(port, () => {
    console.log('server is running on port:', port);
});
