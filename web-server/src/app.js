const express = require('express');
const app = express();
const PORT = 3000;


app.get('', (req, res) => {
    res.send('Hello express!');
});

app.get('/help', (req, res) => {
    res.send('This is help');
});

app.get('/about', (req, res) => {
    res.send('This is about');
});

app.get('/weather', (req, res)=>{
    res.send('WEATHER IS GOING TO SHOW UP HERE');
});

app.listen(PORT, () => {
    console.log('Server is up and running on port', PORT)
});
