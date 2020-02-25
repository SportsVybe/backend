const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// import the model that will be used for the events collection
const Event = require("../models/event-model");
const User = require("../models/user-model");

router.get("/events", (req, res, next) => {
    Event.find()
    .then(event =>{
        res.json(event);
        console.log(event)
    })
    .catch(err => {
        res.status(500).json({ err })
    })
})

// POST route => to create a new event
router.post("/event", (req, res, next) => {
  //  console.log("-=-=-=-=-=-=-=-=-=-=-=-=-",req.body, req.session, req.user)
  // console.log(req.user._id);
  // console.log(req.user);
  console.log(req.body)
  Event.create({
    title: req.body.title,
    description: req.body.description,
    location: {
        name: req.body.location.name,
        address: req.body.location.address,
        lat: req.body.location.lat,
        lon: req.body.location.lon,
        id: req.body.location.id
      },
    // status: "active", 
    // user: req.user._id,
    user: req.body.user,
    date: req.body.date,
    sport: req.body.sport,
    img: req.body.img,
    time: req.body.time
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
