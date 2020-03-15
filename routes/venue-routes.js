const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Location = require("../models/venue-model");

router.post("/newvenue", (req, res, next) => {
    console.log(req.body)
    Location.create(
        req.body
    )
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json(err);
    })
})

router.get("/venues")

module.exports = router;