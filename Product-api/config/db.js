
const mongoose=require("mongoose");
let DB_Url="mongodb+srv://poorvijain933:VxxSJSXTnMUwnQPR@cluster0.hz05g.mongodb.net/"
// let DB_Url="mongodb://0.0.0.0:27017/poorvi"

mongoose.connect(DB_Url)
.then(()=>{
    console.log("conection successful")
})
.catch((err)=>{
    console.log("connection failed" ,err)
})

// MongoDB live 
// usename ----poorvijain933
// password----VxxSJSXTnMUwnQPR