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

const multer = require('multer');
const upload = multer({
    dest: 'images'
});

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send();
});