// This sets up the server, configures it and starts it

const express = require('express');

const server = express();
const port = process.env.PORT; // Coming from the environment because we don't yet know what the Heroku port will be
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const placesController = require('./server/places/placesController');

mongoose.connect(process.env.MONGODB_URI);

server.use(bodyParser.json());

// This allows the client to send requests to the server
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow front end requests from anyone. Might want to restrict this at some point.
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // allow these methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // allow these headers
  next();
});


server.use('/places', placesController);

server.get('/ping', (req, res) => res.send('pong')); // This lets you check if the server is alive (health check endpoint)

// Starts server
server.listen(port, () => console.log(`Server started on port ${port}`));
