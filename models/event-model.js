const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user-model');

const eventSchema = new Schema({
    title: String,
    description: String,
    venue: {
        name: String,
        address: String,
        lat: Number,
        lon: Number,
        md_parks_id: String,
        place_id: String,
    },
    // status: String,
    venue_id: { type: Schema.Types.ObjectId, ref: 'Venue', required: false },
    // user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: String,
    sport: String,
    img: String,
    time: String
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;