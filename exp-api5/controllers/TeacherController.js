const routes = require("express").Router();
const Teacher = require("../models/Teacher");
 
routes.get("/", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);
})

routes.get("/:id", async(req, res)=>{
    let result = await Teacher.find({ _id : req.params.id });
    res.send(result[0]);
})

// localhost:3000/api/teacher/add ---- post


routes.post("/", async(req, res)=>{
    await Teacher.create(req.body);
    res.send({ success : true })
})

// localhost:3000/api/teacher/remove/124578 ---- delete
routes.delete("/:a", async(req, res)=>{
    let x = req.params.a;
    await Teacher.deleteMany({ _id : x })
    res.send({ success : true });
})

routes.put("/:a", async(req, res)=>{
    let id = req.params.a;
    // console.log(req.body);
    await Teacher.updateMany({ _id : id }, req.body);
    res.send({ success : true });
});


module.exports = routes;