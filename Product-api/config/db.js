
const mongoose=require("mongoose");
// let DB_Url="mongodb+srv://poorvijain933:VxxSJSXTnMUwnQPR@cluster0.hz05g.mongodb.net/myDatabase?retryWrites=true&w=majority"
// let DB_Url="mongodb://0.0.0.0:27017/poorvi"
let DB_Url="mongodb+srv://poorvijain933:VxxSJSXTnMUwnQPR@cluster0.hz05g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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