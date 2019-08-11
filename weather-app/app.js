const request = require('request');

const url = 'https://api.darksky.net/forecast/abb58408ed4cc40ac3e456f9c5c0b44c/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log(error);
        return;
    }
    data = JSON.parse(response.body);
    console.log(data.currently);
});
