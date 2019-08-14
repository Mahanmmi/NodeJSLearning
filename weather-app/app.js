const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Tehran', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    forecast(data, (error, forecastWeather) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(forecastWeather, "At", data.location);
    });
});