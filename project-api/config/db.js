const mongoose = require("mongoose");
// mongoose.connect("mongodb://0.0.0.0:27017/tss3")
mongoose.connect("mongodb+srv://jamessteppingstone:pTDYPyEAX2jaxOM0@cluster0.bpdv7.mongodb.net/")
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log("NOT CONNECTED ", err);
})

// username : jamessteppingstone
// password  : pTDYPyEAX2jaxOM0