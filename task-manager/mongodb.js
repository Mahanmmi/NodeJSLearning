// CRUD (create read update delete) in Mongo:

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to DB', error);
    }

    const db = client.db(databaseName);

    
    {   //insert (create)

        // db.collection('users').insertOne({
        //     //_id: id, // you can give an ObjectID if you want but we usually dont
        //     name: 'lil nana',
        //     age: 5
        // }, (error, result) => {
        //     if(error) {
        //         return console.log('Unable to insert user', error);
        //     }

        //     console.log(result.ops);
        // });

        // db.collection('users').insertMany([
        //     {
        //         name: 'Sib',
        //         age: 1
        //     }, {
        //         name: 'Sir',
        //         age: 2
        //     }
        // ], (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert docs', error);
        //     }

        //     console.log(result.ops);
        // });

        // db.collection('tasks').insertMany([
        //     {
        //         description: 'Eat breakfast',
        //         completed: true
        //     }, {
        //         description: 'Eat lunch',
        //         completed: true
        //     }, {
        //         description: 'go to class',
        //         completed: false
        //     }
        // ], (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert task docs', error);
        //     }

        //     console.log(result.ops);
        // });
    }

});