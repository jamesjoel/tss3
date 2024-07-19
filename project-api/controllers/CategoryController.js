const routes = require("express").Router();
const Cate = require("../models/Category")

routes.get("/", async(req, res)=>{
    let result = await Cate.find();
    res.send(result)
})
routes.post("/", async(req, res)=>{
    await Cate.create(req.body)
    res.send({success : true})
})

module.exports = routes;