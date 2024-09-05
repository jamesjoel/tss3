

const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/poorvi")
.then(()=>{
    console.log("conection successful")
})
.catch(()=>{
    console.log("connection failed")
})