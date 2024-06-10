let routes = require("express").Router();

routes.get("/", (req, res)=>{
    let data = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "rohit",
            age : 25
        },
        {
            name : "rohit",
            age : 25
        },
        {
            name : "rohit",
            age : 25
        },
        {
            name : "rohit",
            age : 25
        },
    ]
    res.send(data)
})

// http://localhost:3000/hello
routes.get("/hello", (req, res)=>{
    res.send("hello----------");
});

routes.get("/student", (req, res)=>{
    res.send({ fullname : "amar"});
})

module.exports = routes;