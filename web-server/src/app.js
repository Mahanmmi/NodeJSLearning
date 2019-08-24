const path = require('path');
const express = require('express');
const hbs = require('hbs');

const PORT = 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '..', 'public');
const viewsPath = path.join(__dirname, '..', 'templates', 'views');
const partialsPath = path.join(__dirname, '..', 'templates', 'partials');

const app = express();

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// General Pages
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mahan Zendedel'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Mahan Zendedel'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
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

// 404 Pages
app.get('/help/*', (req, res) => {
    res.render('404',{
        title: 'Help',
        name: 'Mahan Zendedel'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: req.url,
        name: 'Mahan Zendedel'
    });
});

app.listen(PORT, () => {
    console.log('Server is up and running on port', PORT);
});
