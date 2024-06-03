const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send({ name : "vijay"});
})
routes.get("/office", (req, res)=>{
    res.send({ name : "vijay"});
})
routes.get("/office/other", (req, res)=>{
    res.send({ name : "vijay"});
})

module.exports = routes;