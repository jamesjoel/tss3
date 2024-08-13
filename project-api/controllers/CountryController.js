const routes = require("express").Router();
const Country = require("../models/Country")

routes.get("/", async(req, res)=>{
    let result = await Country.find();

    res.send(result);
})

module.exports = routes;