const express = require('express');
const path = require('path');
const app = express();
const test = require("./router/test");
const port = 5000;

app.use(express.json());

app.listen(port, () => console.log('listening on 5000'));

app.use(express.static(path.join(__dirname, '../../Front/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../Front/build/index.html'));
});