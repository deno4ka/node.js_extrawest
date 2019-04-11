const mysql = require('mysql');

const connection = require('./config');

module.exports = {
    tableRows: ``,
    getAllItems: function (req, res) {
        let self = this;
        self.tableRows = ``;
        let query = connection.query('SELECT * FROM `items`');
        query.on('result', (row) => {
            self.tableRows += `<tr>
                                    <td>${row.name}</td>
                                    <td>${row.description}</td>
                                    <td>${row.completed ? 'yes' : 'no'}</td>
                                </tr>`
        });
        query.on('end', () => {
            res.render('index', {data: self.tableRows});
        });
    }
};
