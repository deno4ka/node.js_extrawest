const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';
const options = {useNewUrlParser: true};
const users = [{name: 'Bob', age: 34}, {name: 'Alice', age: 21}, {name: 'Tom', age: 45}];

MongoClient.connect(url, options, (err, client) => {
    if (err) throw err;
    const db = client.db('userCollectionDB');
    const collection = db.collection('users');
    collection.insertMany(users, (err, results) => {
        if (err) throw err;
        collection.findOneAndUpdate(
            {age: 21},
            {$set: {age: 25}},
            {returnOriginal: false},
            (err, result) => {
                if (err) throw err;
                console.log(result);
                client.close();
            });
    });
});
