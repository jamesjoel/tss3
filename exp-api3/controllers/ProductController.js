const routes = require("express").Router();


routes.get("/", (req, res)=>{
    res.send({ title : "Sony"})
})

module.exports = routes;