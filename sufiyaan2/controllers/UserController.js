const routes = require("express").Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/sufiyaan");

const UserSchema = mongoose.Schema({
    age : Number,
    name : String,
    city : String,
    gender : String
})

const User = mongoose.model("user", UserSchema);


routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send(result);
})

module.exports = routes;