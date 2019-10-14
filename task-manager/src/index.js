const express = require("express");

require("./db/mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const MAINTENANCE = false;

if (MAINTENANCE) {
    app.use((req, res, next) => {
        res.status(503).send('Server is under maintenance');
    });
}

app.use(express.json());
app.use(require('./router/user'));
app.use(require('./router/task'));

app.listen(PORT, () => {
    console.log('Server is up and running');
});

const Task = require('./models/task');
const User = require('./models/user');

// async function main() {
//     // const task = await Task.findById('5da489b3b42b8b34486f5871');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);

//     const user = await User.findById('5da488fa7d62f21d10f5a9a3');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);

// }

// main();