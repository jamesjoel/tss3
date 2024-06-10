const routes = require("express").Router();
const Student = require("../models/Student");

routes.get("/", async(req, res)=>{
    let result = await Student.find();
    res.send(result);
})
// http://localhost:3000/api/student
routes.post("/", async(req, res)=>{
    // console.log(req.body);
    await Student.create(req.body);
    res.send({ success : true })
});


module.exports = routes;