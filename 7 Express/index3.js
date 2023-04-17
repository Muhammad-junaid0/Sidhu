const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
//app.use(express.static(publicPath));
app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/help', (req, res) => {
    res.sendFile(`${publicPath}/help.html`);
})
app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/contact.html`);
})
app.get('*', (req, res) => {
    res.send("<h1>Page Not Found 404</h1>");
})
app.listen(5002);


//http://localhost:5001/help.html
