const routes = require("express").Router();

/*
    when we want communicate into mongodb then we have to code
    1. connection
    2. schema
    3. model

*/
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/sufiyaan");

const City = mongoose.Schema({
    name : String
}, {collection : "city"});

const CityModel = mongoose.model("city", City);







routes.get("/", async(req, res)=>{
    let result = await CityModel.find();
    res.send(result);
})

module.exports = routes;