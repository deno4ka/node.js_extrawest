const MongoClient = require('mongodb').MongoClient;
const persons = require('./persons');

const url = 'mongodb://localhost:27017/';
const options = { useNewUrlParser: true };

MongoClient.connect(url, options, (err, client) => {
    if (err) {
        throw err;
    }
    const db = client.db('userCollectionDB');
    const collection = db.collection('users');
    collection.insertMany(persons, (err, results) => {
        if (err) {
            throw err;
        }
        console.log('Data was added!');
        console.log('********** Result **********');
        console.log(results);
        console.log('****************************');
    });
    client.close();
});
