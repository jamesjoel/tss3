const express = require("express");
const app = express();



app.get("/api/student", (req, res)=>{
    let info = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "amit",
            age : 30
        }
    ]
    res.send(info);
})
app.get("/api/teacher", (req, res)=>{

    

    let info = [
        {
            name : "jaya",
            salary : 25000
        },
        {
            name : "gaurav",
            salary : 30000
        }
        ,
        {
            name : "nidhi",
            salary : 27000
        }
    ]
    res.send(info);
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})

/*
    res.sendFile()  ----- .html file send
    res.send() ------ data send

*/