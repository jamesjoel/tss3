const routes=require("express").Router();
const Category =require("../model/Category")
  routes.post("/" ,(async(req,res)=>{
    await Category.create(req.body);
    res.send({success:true});
  }))
    routes.get("/",(async(req,res)=>{
        let result=await Category.find();
        res.send(result);
        res.send({success:true});
    }))
module.exports=Category;
