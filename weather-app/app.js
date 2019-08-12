const request = require('request');
/* 
const darkskyUrl = 'https://api.darksky.net/forecast/abb58408ed4cc40ac3e456f9c5c0b44c/37.8267,-122.4233?units=si&lang=en';
 
request({ url: darkskyUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
        return;
    } else if (response.body.error){
        console.log('Unable to find location');
        return;
    }
    currently = response.body.currently;
    console.log(response.body.daily.summary,"It is currently", currently.temperature, "degrees out. There is a", currently.precipProbability + "% chance of rain.");
}); */


const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angles.json?access_token=pk.eyJ1IjoibWFoYW5tbWkiLCJhIjoiY2p6ODNzbDAzMGRpeDNubjB5Z3Zwc2Z6dSJ9.TIkJJ14RosHnKOrZTGXcPQ&limit=1';

request({ url: mapboxUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to location service");
        return;
    } else if (!response.body.features.length) {
        console.log("Unable to find location");
        return;
    }
    const features = response.body.features[0];
    console.log(features.center);
});




