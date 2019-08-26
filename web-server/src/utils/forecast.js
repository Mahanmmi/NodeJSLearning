const request = require('request')

function forecast({ latitude, longitude }, callback) {
    const darkskyUrl = 'https://api.darksky.net/forecast/abb58408ed4cc40ac3e456f9c5c0b44c/' +
        longitude + ',' + latitude + '?units=si&lang=en';

    request({ url: darkskyUrl, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
            return;
        } else if (body.error) {
            callback('Unable to find location', undefined);
            return;
        }
        callback(undefined, body.daily.summary + " It is currently " + body.currently.temperature +
            " degrees out. There is a " + body.currently.precipProbability + "% chance of rain.");
    });
}

module.exports = forecast;
