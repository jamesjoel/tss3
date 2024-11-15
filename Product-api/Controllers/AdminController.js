const routes=require("express").Router();
const Admin =require("../model/Admin")
let sha1=require("sha1")

routes.post("/" ,(async(req,res)=>{
    req.body.password=sha1(req.body.password)
  await Admin.create(req.body);
  res.send({success:true});
}))
routes.get("/",(async(req,res)=>{
    let result=await Admin.find();
    res.send(result);
    // res.send({success:true});
}))
routes.get("/:id",(async(req,res)=>{
    let id= req.params.id;
    let result=await Admin.find({_id :id});
    res.send(result[0]);
    // res.send({success:true});
}))
   routes.delete("/:id",async(req,res)=>{
    let id =req.params.id;
    await Admin.deleteMany({_id :id});
    // here we  delete the data whose id is _id
    res.send({success:true});
  })

  routes.put("/:id" ,async(req,res)=>{
    let id= req.params.id;
    let result =await Admin.updateMany({_id:id},req.body);
    res.send({success:true , result:result});
  })
  

module.exports=routes;
