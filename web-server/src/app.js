const path = require('path');
const express = require('express');
const PORT = 3000;
const publicDirectoryPath = path.join(__dirname, '..', 'public');
const app = express();


app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mahan Zendedel'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About me',
        name: 'Mahan Zendedel'
    });
});

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help',
        name: 'Mahan Zendedel'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: `It's 35°C`,
        location: `Tehran`
    });
});

app.listen(PORT, () => {
    console.log('Server is up and running on port', PORT);
});
