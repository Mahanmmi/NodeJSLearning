const express = require("express");

require("./db/mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(require('./router/user'));
app.use(require('./router/task'));

app.listen(PORT, () => {
    console.log('Server is up and running');
});