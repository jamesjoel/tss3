let express = require("express");
let app = express();

// the app.get() method/fun is used for create a route
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html")
})

app.get("/hello", (req, res)=>{
    res.sendFile(__dirname+"/hello.html")
})

app.listen(3000, ()=>{
    console.log("server running")
})

// tss@1013