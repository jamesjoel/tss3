const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send({ name : "rohit" })
});
routes.get("/pass", (req, res)=>{
    res.send({ name : "vijay" })
});
routes.get("/fail", (req, res)=>{
    res.send({ name : "amit" })
});

module.exports = routes;


