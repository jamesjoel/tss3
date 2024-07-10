require("../config/db");

let mongoose = require("mongoose")
let UserSchema = mongoose.Schema({
    name : String,
    password : String,
    repass : String,
    email : String,
    gender : String,
    city : String,
    address : String
})

let User = mongoose.model("user", UserSchema);
module.exports = User;