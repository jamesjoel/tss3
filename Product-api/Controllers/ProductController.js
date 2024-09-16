const routes=require("express").Router()
 const Product=require("../model/Product");

 routes.post("/" ,(async(req,res)=>{
    await Product.create(req.body);
    res.send({success:true});
  }))
routes.get("/" , async(req,res)=>{
        let result= await Product.find();
     res.send(result);
     console.log(result);
    })
     // here this one is custom API 
     routes.get("/findbycategory/:a",async(req,res)=>{
      let a=req.params.a;
      let result= await SubCategory.find({category :a})
      res.send(result);
    });
  
    routes.get("/:id",(async(req,res)=>
        {
            let id= req.params.id;
            let result=await Product.find({_id:id});
            res.send(result[0]);
        }))
       
        routes.put("/:id",(async(req,res)=>
        {
            let id=req.params.id;
            let result=await Product.updatemany({_id:id},req.body)
            res.send({seccess:true,result:result});
        }))
        routes.delete("/:id",async(req,res)=>{
            let id =req.params.id;
            await Product.deleteMany({_id :id});
            // here we  delete the data whose id is _id
            res.send({success:true});
          })
         
   

module.exports=routes;

// WE MUST WRITE  OUR CUSTOM API OVER GET API WITH PARAMETER