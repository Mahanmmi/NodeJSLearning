const mongoose = require('mongoose');

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
});

// const myTask = new Task({
//     description: 'Learn MongoDB',
//     completed: false
// });

// myTask.save().then(() => {
//     console.log(myTask);
// }).catch((err) => {
//     console.log(err);
// });

module.exports = Task;