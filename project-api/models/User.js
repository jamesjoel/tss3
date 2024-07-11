require("../config/db");

let mongoose = require("mongoose")

// encrypt-decrypt

let UserSchema = mongoose.Schema({
    name : String,
    password : String,
    
    email : String,
    gender : String,
    city : String,
    address : String
})

let User = mongoose.model("user", UserSchema);
module.exports = User;

/*
express
mongoose
cors


*/