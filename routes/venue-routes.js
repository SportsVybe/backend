const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Venue = require("../models/venue-model");

router.post("/newvenue", (req, res, next) => {
    // console.log(req.body)
    Venue.create(
        req.body
    )
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json(err);
    })
})

router.get("/venues", (req, res, next) => {

    Venue.find()
    .then(venue=>{
        res.json(venue)
    })
    .catch(err => {
        res.json(err)
    })

})

module.exports = router;