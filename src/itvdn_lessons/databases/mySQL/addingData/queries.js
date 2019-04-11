const mysql = require('mysql');

const pool = require('./config');

module.exports = {
    tableRows: ``,
    getAllItems: (req, res) => {
        let tableRows = ``;
        let query = pool.query('SELECT * FROM `items`');
        query.on('result', (row) => {
            tableRows += `<tr>
                                    <td>${row.name}</td>
                                    <td>${row.description}</td>
                                    <td>${row.completed ? 'yes' : 'no'}</td>
                                </tr>`
        });
        query.on('end', () => {
            res.render('index', {data: tableRows});
        });
    },
    insertItem: (req, res) => {
        let data = req.body;
        let inserts = [data.name, data.description, parseInt(data.completed)];
        pool.query('INSERT INTO `items` (`name`, `description`, `completed`) VALUES (?,?,?)',
            inserts, (err, results, fields) => {
            if (err) throw err;
            console.log('Item was added');
        });
    }
};
