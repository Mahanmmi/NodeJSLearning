// CRUD (create read update delete) in Mongo:
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to DB', error);
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Mahan',
    //     age: 19
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user', error);
    //     }

    //     console.log(result.ops);
    // });

    db.collection('users').insertMany([
        {
            name: 'Sib',
            age: 1
        }, {
            name: 'Sir',
            age: 2
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert docs', error);
        }

        console.log(result.ops);
    });
});