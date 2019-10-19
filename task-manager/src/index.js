const express = require("express");

require("./db/mongoose");

const app = express();
const PORT = process.env.PORT;

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
    console.log('Server is up and running on port', PORT);
});
