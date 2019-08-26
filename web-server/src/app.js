const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
    if (!req.query['address']) {
        return res.send({
            error: 'You must provide an address'
        });
    }

    geocode(req.query['address'], (geocodeError, coordinates) => {
        if (geocodeError) {
            return res.send(geocodeError);
        }

        forecast(coordinates, (forecastError, weatherResult) => {
            if (forecastError) {
                return res.send(forecastError);
            }

            res.send({
                weatherResult,
                location: coordinates.location,
                address: req.query['address']
            });
        })
    });
});

app.get('/products', (req, res) => {
    if (!req.query['search']) {
        return res.send({
            error: 'You must provide a search term'
        });
    }

    console.log(req.query.search);
    res.send({
        products: []
    });
});

// 404 Pages
app.get('/help/*', (req, res) => {
    res.render('404', {
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
