let routes = require("express").Router();
let User = require("../models/User");
let jwt = require("jsonwebtoken")

routes.get("/", async(req, res)=>{
    // console.log(req.headers)
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "hello");
    let result = await User.find({ _id : obj._id })
    res.send(result[0]);
})

module.exports = routes;