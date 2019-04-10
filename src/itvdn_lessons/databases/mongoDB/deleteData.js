const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';
const options = { useNewUrlParser: true };

MongoClient.connect(url, options, (err, client) => {
    if (err) throw err;
    const db = client.db('userCollectionDB');
    const collection = db.collection('users');
    collection.find().toArray((err, res) => {
        if (err) throw err;
        console.log(res);
    });

    // collection.deleteOne({name:'Sergey', age:37}, (err, result) => {
    //     if (err) throw err;
    //     console.log(result);
    //
    //     collection.find().toArray((err, res) => {
    //         if (err) throw err;
    //         console.log(res);
    //         client.close();
    //     });
    // });

    collection.deleteMany({name:'Ivan'}, (err, result) => {
        if (err) throw err;
        console.log(result);
        client.close();
    });
});
