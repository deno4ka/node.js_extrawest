const path = require('path');

const queries = require('./queries');

module.exports = {
    loadAddPage: (req, res) => {
        res.render(path.join(__dirname, './pages/add_item_page'));
    },
    addRow: (req, res) => {
        queries.insertItem(req, res)
    }
};
