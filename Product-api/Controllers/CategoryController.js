const routes=require("express").Router();
const Category =require("../model/Category")

routes.post("/" ,(async(req,res)=>{
  await Category.create(req.body);
  res.send({success:true});
}))
routes.get("/",(async(req,res)=>{
    let result=await Category.find();
    res.send(result);
    // res.send({success:true});
}))
routes.get("/:id",(async(req,res)=>{
    let id= req.params.id;
    let result=await Category.find({_id :id});
    res.send(result[0]);
    // res.send({success:true});
}))
   routes.delete("/:id",async(req,res)=>{
    let id =req.params.id;
    await Category.deleteMany({_id :id});
    // here we  delete the data whose id is _id
    res.send({success:true});
  })

  routes.put("/:id" ,async(req,res)=>{
    let id= req.params.id;
    let result =await Category.updateMany({_id:id},req.body);
    res.send({success:true , result:result});
  })
  

module.exports=routes;
