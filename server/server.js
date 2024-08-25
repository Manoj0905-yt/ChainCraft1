const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

let temperature = '--';
let humidity = '--';

app.post('/endpoint', (req, res) => {
    temperature = req.body.temperature;
    humidity = req.body.humidity;
    res.send('Data received');
});

app.get('/getData', (req, res) => {
    res.json({ temperature, humidity });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
