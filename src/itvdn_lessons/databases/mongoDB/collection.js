const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';
const options = { useNewUrlParser: true };

MongoClient.connect(url, options, (err, client) => {
    if (err) {
        throw err;
    }
    const db = client.db('userCollectionDB');
    const collection = db.collection('users');
    const user = {firstName:'Ivan', lastName:'Ivanov', age:30};
    collection.insertOne(user, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result.ops);
    });
    client.close();
});
