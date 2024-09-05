const routes=require("express").Router()
 const Product=require("../model/Product");

routes.get("/" , async(req,res)=>{
        let result= await Product.find();
     res.send(result);
     console.log(result);
    }
)
module.exports=routes;
