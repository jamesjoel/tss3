const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
})

module.exports = routes;