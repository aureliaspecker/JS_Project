const express = require('express');

const server = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const placesController = require('./server/places/placesController');

mongoose.connect(process.env.MONGODB_URI);

server.use(bodyParser.json());

server.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next()
});

server.use('/places', placesController);

server.get('/ping', (req, res) => res.send('pong'));

server.listen(port, () => console.log(`Server started on port ${port}`));

// Not deployed to Heroku yet
