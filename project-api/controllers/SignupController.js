let routes = require("express").Router();
let User = require("../models/User");

routes.post("/", async(req, res)=>{
    await User.create(req.body);
    res.send({ success : true });
})

module.exports = routes;