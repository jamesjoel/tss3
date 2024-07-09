const routes = require("express").Router();
const Cate = require("../models/Category")

routes.get("/", async(req, res)=>{
    let result = await Cate.find();
    res.send(result)
})

module.exports = routes;