const routes=require("express").Router();
const City=require("../model/City");

routes.get("/",async(req,res)=>{
    let result= await City.distinct("state");
    // console.log(result);
    res.send(result);
})
// localhost:3000/api/v1/city/state/:a
routes.get("/State/:a",async(req,res)=>{
    let s=req.params.a;
    let result = await City.find({state : s});
    res.send(result);
})
module.exports=routes;
