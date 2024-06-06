const routes = require("express").Router();

/*
    if we want to intract with mongodb then we have to write 
    3 types of code


    1. connect to mongodb
        mongoose.connect("connect url")
    
    
    2. create schema
        variable = mongoose.Schema({
            prop : DataType,
            prop : DataType
        })
    
    
    3. create model



*/
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss3");

const StudentSchema = mongoose.Schema({
    name : String,
    class : Number,
    gender : String,
    fee : Number
})

const Stu = mongoose.model("student", StudentSchema);







routes.get("/", async(req, res)=>{
   let result = await Stu.find(); 
   res.send(result)
})

module.exports = routes;