const mysql = require('mysql');

const helper = require('../helper');

const config = {
    user: 'root',
    password: 'admin',
    host: 'localhost',
    database: 'testdb',
    port: 3306,
    connectionLimit: 10,
    typeCast: helper.castField
};

const pool = mysql.createPool(config);

module.exports = pool;
