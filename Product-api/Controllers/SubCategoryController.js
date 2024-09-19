const routes=require("express").Router();
const SubCategory =require("../model/SubCategory")
 
routes.post("/" ,(async(req,res)=>
  {
    await SubCategory.create(req.body);
    res.send({success:true});
  }))
 
routes.get("/",(async(req,res)=>{
        let result=await SubCategory.find();
        res.send(result);
        // res.send({success:true});
    }))
    routes.get("/findbycategory/:a",async(req,res)=>{
      let a=req.params.a;
      let result= await SubCategory.find({category :a})
      res.send(result);
    });

    routes.get("/:id",(async(req,res)=>
    {
        let id= req.params.id;
        let result=await SubCategory.find({_id:id});
        res.send(result[0]);
    }))
   
    routes.put("/:id",(async(req,res)=>
    {
        let id=req.params.id;
        let result=await SubCategory.updatemany({_id:id},req.body)
        res.send({seccess:true,result:result});
    }))
    routes.delete("/:id",async(req,res)=>{
        let id =req.params.id;
        await SubCategory.deleteMany({_id :id});
        // here we  delete the data whose id is _id
        res.send({success:true});
      })
    
module.exports=routes;
