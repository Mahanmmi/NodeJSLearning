const request = require('request')

function forecast(place, callback) {
    const darkskyUrl = 'https://api.darksky.net/forecast/abb58408ed4cc40ac3e456f9c5c0b44c/' +
        place.longitude + ',' + place.latitude + '?units=si&lang=en';

    request({ url: darkskyUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
            return;
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
            return;
        }
        const currently = response.body.currently;
        callback(undefined, response.body.daily.summary + " It is currently " + currently.temperature +
            " degrees out. There is a " + currently.precipProbability + "% chance of rain.");
    });
}

module.exports = forecast;
