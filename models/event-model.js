const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user-model');

const eventSchema = new Schema({
    title: String,
    description: String,
    location: {
        name: String,
        address: String,
        lat: Number,
        lon: Number,
        id: String,
    },
    // status: String,
    // user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    user: String,
    date: String,
    sport: String,
    img: String,
    time: String
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;