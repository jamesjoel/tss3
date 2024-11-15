const routes=require("express").Router()
 const Product=require("../model/Product");
 let path = require("path");

 routes.post("/" ,(async(req,res)=>{
  // console.log(req.body);
  // console.log(req.files);
  let myfile= req.files.uploadedimage;
  req.body.image=myfile.name;
  // name of that image will be stored in body.image
  let imagepath=path.resolve()+"/assets/images"+myfile.name;
  await myfile.mv(imagepath);
     let result = await Product.create(req.body);
    res.send({success:true ,result : result});
  }))
routes.get("/" , async(req,res)=>{
    let result= await Product.find();
     res.send(result);
    //  console.log(result);
    })
     // here this one is custom API 
     routes.get("/:id",(async(req,res)=>
        {
            let id= req.params.id;
            let result=await Product.find({_id:id});
            res.send(result[0]);
        }))
       
        routes.put("/:id",(async(req,res)=>
        {
            let id=req.params.id;
            let result=await Product.updateMany({_id:id},req.body)
            res.send({seccess:true,result:result});
        }))
        routes.delete("/:id",async(req,res)=>{
            let id =req.params.id;
            await Product.deleteMany({_id :id});
            // here we  delete the data whose id is _id
            res.send({success:true});
          })
       
          routes.get("/pagination/:a",async(req,res)=>{
            let a=req.params.a;
            let result = await Product.find().limit(a).exec();
            res.send(result);
          })
           routes.get("/totalrec", async (req, res) => {
            let result = await Product.estimatedDocumentCount()
            res.send({ total: result }); // This is correct
            console.log(total);
        });
         
   

module.exports=routes;

// WE MUST WRITE  OUR CUSTOM API OVER GET API WITH PARAMETER