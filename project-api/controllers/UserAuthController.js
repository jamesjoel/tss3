let routes = require("express").Router();
let User = require("../models/User");
let sha1 = require("sha1");

routes.post("/", async(req, res)=>{
    let result = await User.find({ email : req.body.email, password : sha1(req.body.password) });
    console.log(result);
})

module.exports = routes;