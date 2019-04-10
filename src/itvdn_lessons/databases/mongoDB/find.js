const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';
const options = { useNewUrlParser: true };

MongoClient.connect(url, options, (err, client) => {
    if (err) throw err;
    const db = client.db('userCollectionDB');
    const collection = db.collection('users');
    let cursor = collection.find();
    cursor.toArray((err, all) => {
        if (err) throw err;
        console.log('********** All Data **********');
        console.log(all);
        console.log('******************************');
        collection.find({name:'Sergey'}).toArray((err, res) => {
            if (err) throw err;
            console.log('********** Employees with name Sergey **********');
            console.log(res);
            console.log('************************************************');
            collection.findOne({age: {$lt : 30} }).then((value) => {
                console.log('********** Employee with age less than 30 **********');
                console.log(value);
                console.log('****************************************************');
                client.close();
            });
        });
    });
});
