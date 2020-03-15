const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venueSchema = new Schema({}, { strict: false })

const Venue = mongoose.model('Venue', venueSchema);
module.exports = Venue;