const routes=require("express").Router();
const City=require("../model/City");
routes.get("/",async(req,res)=>{
    let result= await City.find();
    res.send(result);
})
module.exports=routes;
