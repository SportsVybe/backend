const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Venue = require("../models/venue-model");

//create venue
router.post("/venue/create", (req, res, next) => {
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

//update venue
router.post("/venue/update/:id", (req, res, next) => {
    console.log(req.body)
    // console.log("+++++++++++++++++")
    // console.log(req)
    console.log("+++++++++++++++++")
    console.log(req.params.id)
    const filter =  { _id : req.params.id  }
    Venue.findOneAndUpdate(filter,
        req.body
    )
    .then(response => {
        console.log("success "+response)
        res.json(response);
    })
    .catch(err => {
        console.log(err)
        res.json("fail "+err);
    })
})

//request venues
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