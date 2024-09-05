let User = require("../model/User");
let routes=require("express").Router()
routes.post("/",async(req,res)=>{
    await User.create(req.body);
    res.send({success:true});
             
})

module.exports=routes;
