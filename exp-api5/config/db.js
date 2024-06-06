const mongoose = require("mongoose");
const DATABASE_URL = require("./constants");

mongoose.connect(DATABASE_URL)
.then(()=>{ 
    console.log("connection success")
})
.catch(()=>{
    console.log("NOT CONNECTED *************")
 })