const routes =require("express").Router();
const Admin=require("../model/Admin")
const sha1=require("sha1")
const jwt=require("jsonwebtoken")
routes.post("/",async(req,res)=>{
    let user=req.body.name;
    let password=req.body.password;
      let result=await Admin.find({name:user});
      if(result.length==1)
      {
        if(result[0].password==sha1(password))
        {
          let obj={id : result[0]._id}
          let token=jwt.sign(obj,"key");
        res.send({success:true,token : token})
        }
      else{
        res.send({success:false,errType:2})
      }
    }
    else{
        res.send({success:false,errType:1})
    }
 })
module.exports =routes;