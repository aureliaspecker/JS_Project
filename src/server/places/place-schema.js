const mongoose = require('mongoose');

const placeSchema = mongoose.model('place',
  {
    name: String,
    type: String,
    website: String,
    rating: Number,
    location: {
      longitude: Number,
      latitude: Number,
    },
  });

module.exports = placeSchema;
