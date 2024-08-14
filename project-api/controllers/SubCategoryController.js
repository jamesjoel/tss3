const routes = require("express").Router();
const SubCate = require("../models/SubCategory")

routes.get("/", async(req, res)=>{
    let result = await SubCate.find();
    res.send(result)
})

// http://localhost:3000/api/subcategory/fruit

routes.get("/:a", async(req, res)=>{
    let x = req.params.a;
    let result = await SubCate.find({ category : x });
    res.send(result)
})


routes.post("/", async(req, res)=>{
    await SubCate.create(req.body)
    res.send({success : true})
})
routes.delete("/deleteall", async(req, res)=>{
    await SubCate.deleteMany({});
    res.send({ success : true });
})


routes.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    await SubCate.deleteMany({ _id : id });
    res.send({ success : true });
})



routes.put("/:id", async(req, res)=>{
    let id = req.params.id;
    await SubCate.updateMany({ _id : id }, req.body);
    res.send({ success : true });
})

module.exports = routes;