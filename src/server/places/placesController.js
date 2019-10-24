const express = require('express');

const router = express.Router();
const Place = require('./place-schema');

router.get('/', (req, res) => {
  Place.find({}, (err, places) => {
    res.json(places);
  });
});

router.get('/:id', (req, res) => {
  Place.findOne({ _id: req.params.id }, (err, place) => {
    if (err) {
      res.status(400);
      res.json(err);
    } else {
      res.json(place);
    }
  });
});

router.post('/', (req, res) => {
  console.log(req);
  const place = new Place({
    name: req.body.name,
    type: req.body.type,
    website: req.body.website,
    rating: req.body.rating,
    location: {
      longitude: req.body.location.longitude,
      latitude: req.body.location.latitude,
    },
    // source: req.body.source,
    // createdAt: req.body.createdAt,
    // openingTime: req.body.openingTime,
    // externalRating: req.body.externalRating,
    // url: req.body.url,
    // userRating: req.body.userRating,
    // userReviews: req.body.userReviews
  });
  place.save(console.log);
  res.json(place);
});

router.delete('/:id', (req, res) => {
  Place.findOneAndRemove({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(400);
      res.json(err);
    } else {
      res.send('Delete successful');
    }
  });
});

module.exports = router;
