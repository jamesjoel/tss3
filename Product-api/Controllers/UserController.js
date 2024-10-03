let User = require("../model/User");
let routes=require("express").Router()
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
routes.post("/",async(req,res)=>{
    req.body.password= sha1(req.body.password);
    // after converted our password we created data body
    await User.create(req.body);
    res.send({success:true});
})
   
    routes.get("/",async(req,res)=>{
        let result= await User.find();
        res.send(result)
    })
    routes.get("/info",async(req,res)=>{
    let token =  req.headers.authorization;
    let obj=jwt.decode(token,"hello");
   let id=obj.id;
   let result= await User.find({_id :id },"username address email pincode contact gender state city");
   res.send(result[0]);
    })
    
    routes.post("/update",async(req,res)=>{
     let token= req.headers.authorization;
     let obj=jwt.decode(token,"hello");
     let id=obj.id;
     await User.updateMany({_id:id},req.body);
     res.send({success:true ,name:req.body.username})
    })
    routes.post("/changepass",async(req,res)=>{
        let token= req.headers.authorization;
        let obj=jwt.decode(token,"hello");
        let id=obj.id;
       let result = await User.find({_id:id})
        if(result[0].password==sha1(req.body.password))
        {
            let passobj={password:sha1(req.body.newpass)};
            await User.updateMany({_id:id},passobj);
            res.send({success:true})
        }
        else
        {
            res.send({success:false})
        }
    })

    // to change status of user
    routes.get("/changestatus/:id/:status",async (req,res)=>{
        let id=req.params.id;
        let status=req.params.status==1?0:1;
        
        await User.updateMany({_id:id},{status:status});
        res.send({success:true})

 })
     //   to do updation we need to  find the user first so we decode the token and get id from there 
    // after login  we get token and we decode it and get id and then we use that id to find the user
   //  we send headder with each  request so we can get the token in req.headers.authorization
//  here hello is that string with the help we created that token
module.exports=routes;
