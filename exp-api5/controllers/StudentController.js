const routes = require("express").Router();
const Student = require("../models/Student");

routes.get("/", async(req, res)=>{
    let result = await Student.find();
    res.send(result);
})

module.exports = routes;