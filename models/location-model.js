const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
     any: Schema.Types.Mixed 
})

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;