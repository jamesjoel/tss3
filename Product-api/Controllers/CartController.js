const routes=require("express").Router();
const Category =require("../model/Cart")

// routes.post("/" ,(async(req,res)=>{
//   await Cart.create(req.body);
//   res.send({success:true});
// }))
routes.get("/",(async(req,res)=>{
    let result=await Cart.find();
    res.send(result);
    // res.send({success:true});
}))
routes.get("/CartData",(async(req,res)=>{
    let token=req.headers.authorization;
    let obj=jwt.decode(token,"hello")
    let result=await Cart.find({userid : id});
    res.send(result[0]);
    // res.send({success:true});
}))
//    routes.delete("/:id",async(req,res)=>{
//     let id =req.params.id;
//     await Cart.deleteMany({_id :id});
//     // here we  delete the data whose id is _id
//     res.send({success:true});
//   })

  routes.put("/:id" ,async(req,res)=>{
    let id= req.params.id;
    let result =await Cart.updateMany({userid:id},req.body);
    res.send({success:true , result:result});
  })
  

module.exports=routes;
// we dont need post and delete here because data will automatically added and updated we domt  need to add and delete manually

