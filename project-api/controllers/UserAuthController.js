let routes = require("express").Router();
let User = require("../models/User");
let sha1 = require("sha1");
let jwt = require("jsonwebtoken");

routes.post("/", async(req, res)=>{
    let e = req.body.email;
    let p = req.body.password;

    let result = await User.find({ email : e, password : sha1(p) });


    if(result.length == 1) // email and password correct
    {
       // the .toJSON() convert true JSON form in the object
        let token = jwt.sign(result[0].toJSON(), "hello");
        res.send({ success : true, token : token, name : result[0].name });

    }
    else{ // email and password incorrect
        res.send({ success : false });
    }
})

module.exports = routes;