const https = require('https');
const url = 'https://api.darksky.net/forecast/abb58408ed4cc40ac3e456f9c5c0b44c/37.8267,-122.4233'


const request = https.request(url, response => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });

});

request.on('error', (error) => {
    console.log('An error:', error);
});

request.end()