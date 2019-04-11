const queries = require('./queries');

module.exports = {
    displayItems: (req, res) => {
        queries.getAllItems(req, res);
    }
};
