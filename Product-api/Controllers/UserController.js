let User = require("../model/User");
let routes=require("express").Router()
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
routes.post("/",async(req,res)=>{
    // console.log("form-data" ,req.body);
    req.body.password= sha1(req.body.password);
    await User.create(req.body);
    res.send({success:true});
})
   
    routes.get("/",async(req,res)=>{
        let result= await User.find();
        res.send(result)
    })
             


module.exports=routes;
