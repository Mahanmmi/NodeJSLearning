const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

const testUserId = new mongoose.Types.ObjectId();
const testUser = {
    _id: testUserId,
    name: "TestUser",
    email: "Mylove@lytest.user",
    password: "veryLovely",
    tokens: [{
        token: jwt.sign({ _id: testUserId }, process.env.JWT_SECRET)
    }]
};

const testUserTwoId = new mongoose.Types.ObjectId();
const testUserTwo = {
    _id: testUserTwoId,
    name: "TestUserTwo",
    email: "Mylove@lytestTwo.user",
    password: "sadasdasdadas",
    tokens: [{
        token: jwt.sign({ _id: testUserTwoId }, process.env.JWT_SECRET)
    }]
};

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: testUser._id,
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: "Test task two desc",
    owner: testUserId,
    completed: true
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: "Test task three desc",
    owner: testUserTwoId,
    completed: true
}

async function setupDatabase() {
    await User.deleteMany();
    await Task.deleteMany();
    await new User(testUser).save();
    await new User(testUserTwo).save();
    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();
}

module.exports = {
    testUser,
    testUserId,
    testUserTwo,
    testUserTwoId,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}