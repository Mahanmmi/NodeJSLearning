const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


let address = "";
    process.argv.forEach((value, index) => {
    if (index > 1) {
        address += value + " ";
    }
});

if (address) {
    geocode(address, (error, data) => {
        if (error) {
            console.log(error);
            return;
        }

        forecast(data, (error, forecastWeather) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(forecastWeather + " At " + data.location);
        });
    });
} else {
    console.log('Please provide an address');
}
