const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Location = require("../models/location-model");

router.post("/newlocation", (req, res, next) => {
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

module.exports = router;