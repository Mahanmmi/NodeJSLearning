const path = require('path');
const express = require('express');
const PORT = 3000;
const publicDirectoryPath = path.join(__dirname, '..', 'public');
const app = express();


app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        forecast: `It's 35°C`,
        location: `Tehran`
    });
});

app.listen(PORT, () => {
    console.log('Server is up and running on port', PORT);
});
