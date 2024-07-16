require("../config/db");

let mongoose = require("mongoose")

let CountrySchema = mongoose.Schema({
    name : String,
    dial_code : String,
    code : String
}, { collection : "country" });

let Country = mongoose.model("country", CountrySchema);

module.exports = Country;