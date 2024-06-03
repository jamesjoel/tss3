const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send({ name : "vijay"});
})

// localhost:3000/api/teacher/teaher/master

routes.get("/master", (req, res)=>{
    res.send({ name : "james"});
})
routes.get("/phd", (req, res)=>{
    res.send({ name : "vijay"});
})
routes.get("/bachelor", (req, res)=>{
    res.send({ name : "vijay"});
})

module.exports = routes;