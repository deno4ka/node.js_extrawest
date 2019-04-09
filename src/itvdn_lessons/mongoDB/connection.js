const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';
const options = { useNewUrlParser: true };

MongoClient.connect(url, options, (err, db) => {
    if (err) {
        throw err;
    }
    console.log('Connection established!');
    db.close();
});
