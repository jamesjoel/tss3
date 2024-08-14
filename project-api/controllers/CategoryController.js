const routes = require("express").Router();
const Cate = require("../models/Category")

routes.get("/", async(req, res)=>{
    let result = await Cate.find();
    res.send(result)
})
routes.get("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Cate.find({ _id : id });
    res.send(result[0])
})
routes.post("/", async(req, res)=>{
    await Cate.create(req.body)
    res.send({success : true})
})

routes.put("/:id", async(req, res)=>{
    let id = req.params.id;
    await Cate.updateMany({ _id : id }, req.body);
    res.send({success : true})
})
routes.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    await Cate.deleteMany({ _id : id });
    res.send({success : true})
})

module.exports = routes;