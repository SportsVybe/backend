const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// import the model that will be used for the events collection
const Event = require("../models/event-model");
const User = require("../models/user-model");
const Venue = require("../models/venue-model");

// Create event
router.post("/event/create", (req, res, next) => {
  
  //console.log(req.body)
  //console.log(req.venue)
  Event.create({
    title: req.body.title,
    description: req.body.description,
    venue_id: req.body.venue_id,
    venue: req.body.venue,
    // status: "active", 
    // user: req.user._id,
    // user: req.body.user,
    date: req.body.date,
    sport: req.body.sport,
    img: req.body.img,
    // time: req.body.time
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

//Request events
router.get("/events", (req, res, next) => {
  Event.find()
    .then(event => {
      res.json(event);
      // console.log(event)
    })
    .catch(err => {
      res.status(500).json({ err })
    })
})

//Request user events
router.get("/myevents", (req, res, next) => {
  if (!req.user) {
    res.json('No user logged in')
  } else {
    Event.find({ user: req.user._id })
    .then(allMyEvents => {
      res.json(allMyEvents)
    })
  }
})

module.exports = router;
