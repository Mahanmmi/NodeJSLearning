const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password'))
                throw new Error('Weak password');
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive');
            }
        }
    }
});

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

{
// const me = new User({
//     name: 'Ali',
//     email: 'alimali@ceitssc.ir',
//     password: 'Haa',
//     age: 71
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((err) => {
//     console.log('Errorrrrrr!', err);
// });

// const myTask = new Task({
//     description: 'Learn MongoDB',
//     completed: false
// });

// myTask.save().then(() => {
//     console.log(myTask);
// }).catch((err) => {
//     console.log(err);
// });
}
