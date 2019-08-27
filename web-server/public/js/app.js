/* eslint-disable no-undef */
console.log('Client side javascript file');

function getForecast(location = '!', errP, resP) {
    fetch('/weather?address=' + location).then(response => {
        response.json().then((forecast) => {
            if (forecast.error) {
                return errP.textContent = forecast.error;
            }
            
            errP.textContent = forecast.location;
            resP.textContent = forecast.weatherResult;

            console.log(forecast.location);
        });
    });
}

const weatherForm = document.querySelector('form');
const searchQuery = document.querySelector('input');
const errorParagraph = document.getElementById('errorParagraph');
const resultParagraph = document.getElementById('resultParagraph');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = searchQuery.value;
    errorParagraph.textContent = 'Loading...';
    resultParagraph.textContent = '';
    getForecast(location, errorParagraph, resultParagraph);
});