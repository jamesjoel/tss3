let routes = require("express").Router();
let Admin = require("../models/Admin");
let sha1 = require("sha1");
let jwt = require("jsonwebtoken")

routes.post("/", async(req, res)=>{
    
    
    let u = req.body.username;
    let p = req.body.password;
    let result = await Admin.find({ username : u, password : sha1(p)});

    if(result.length==1)
    {
        let token = jwt.sign(result[0].toJSON(), "hello");
        res.send({ success : true, token : token });
    }
    else{
        res.send({ success : false });
    }
})

module.exports = routes;
