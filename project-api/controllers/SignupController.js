let routes = require("express").Router();
let User = require("../models/User");
let sha1 = require("sha1")

routes.post("/", async(req, res)=>{
    delete req.body.repass;

    req.body.password = sha1(req.body.password);

    await User.create(req.body);
    res.send({ success : true });
})

module.exports = routes;