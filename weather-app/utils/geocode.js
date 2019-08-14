const request = require('request')

function geocode(address, callbackGetWeather) {
    const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +
        '.json?access_token=pk.eyJ1IjoibWFoYW5tbWkiLCJhIjoiY2p6ODNzbDAzMGRpeDNubjB5Z3Zwc2Z6dSJ9.TIkJJ14RosHnKOrZTGXcPQ&limit=1';

    request({ url: mapboxUrl, json: true }, (error, response) => {
        if (error) {
            callbackGetWeather('Unable to connect to location services!', undefined);
            return;
        } else if (!response.body.features.length) {
            callbackGetWeather('Cannot find the specified location. Try another search', undefined);
            return;
        }

        callbackGetWeather(undefined, {
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1],
            location: response.body.features[0].place_name
        });
    });
}

module.exports = geocode;