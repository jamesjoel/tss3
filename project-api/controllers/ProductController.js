const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send(result);
})
routes.get("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Product.find({ _id : id });
    res.send(result[0]);
})

routes.post("/", async(req, res)=>{
    // console.log(req.body);
    // console.log(req.files);
    let image = req.files.image;
    await image.mv("F:/tss3/project-api/assets/product-images/"+image.name);


    req.body.image = image.name;


    await Product.create(req.body);
    res.send({ success : true });
})

routes.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    await Product.deleteMany({ _id : id });
    res.send({success : true });
})
routes.put("/:id", async(req, res)=>{
    let id = req.params.id;
    await Product.updateMany({ _id : id }, req.body);
    res.send({success : true });
})



module.exports = routes;