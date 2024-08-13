require("../config/db");

const mongoose = require("mongoose");

const CitySchema = mongoose.Schema({
    city : String,
    state : String
}, {collection : "city"})

let city = mongoose.model("city", CitySchema);

module.exports = city;