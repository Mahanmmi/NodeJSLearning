const express = require("express");

require("./db/mongoose");

const app = express();

const MAINTENANCE = false;

if (MAINTENANCE) {
    app.use((req, res, next) => {
        res.status(503).send('Server is under maintenance');
    });
}

app.use(express.json());
app.use(require('./router/user'));
app.use(require('./router/task'));

module.exports = app;
