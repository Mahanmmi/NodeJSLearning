// CRUD (create read update delete) in Mongo:

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require('mongodb');

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

    {   //find (read)

        // db.collection('users').findOne({ _id: new ObjectID('5d6639e0e750bd04c06ad0d0') }, (error, user) => {
        //     if (error) {
        //         return console.log("Unable to fetch", error);
        //     }

        //     if (!user) {
        //         return console.log("Cant find the specified user");
        //     }

        //     console.log(user);
        // });

        // db.collection('users').find({ age: 19 }).toArray((error, users) => {
        //     if (error) {
        //         return console.log("Unable to fetch", error);
        //     }

        //     if (!users) {
        //         return console.log("Cant find the specified users");
        //     }

        //     console.log(users);
        // });

        // db.collection('users').find({ age: 19 }).count((error, usersCount) => {
        //     if (error) {
        //         return console.log("Unable to fetch", error);
        //     }

        //     if (!usersCount) {
        //         return console.log("Cant find the specified users");
        //     }

        //     console.log(usersCount);
        // });

        // db.collection('tasks').findOne({ _id: new ObjectID('5d663fa354b9841850f3a041') }, (error, task) => {
        //     if (error) {
        //         return console.log('Cannot fetch', error);
        //     }

        //     if (!task) {
        //         return console.log('Cannot find the specified task');
        //     }

        //     console.log(task);
        // });

        // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        //     if (error) {
        //         return console.log('Cannot fetch', error);
        //     }

        //     if (!tasks) {
        //         return console.log('Cannot find the specified tasks');
        //     }

        //     console.log(tasks);
        // });
    }



});