const mongoose= require("mongoose");
require("../config/db");
const CitySchema=mongoose.Schema({
    city:String,
    state:String
},{collection:"City"})
let City=mongoose.model("City",CitySchema);
module.exports=City
