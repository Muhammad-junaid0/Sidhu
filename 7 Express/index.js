const express = require('express');
app = express();

app.get('', (req, res) => {
    res.send('Welcom, this is home page')
});

app.get('/about', (req, res) => {
    res.send('Welcom, this is about page')
});

app.get('/help', (req, res) => {
    res.send('Welcom, this is help page')
});

app.listen(5000);