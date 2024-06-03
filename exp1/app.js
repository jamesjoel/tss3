let express = require("express");
let app = express();


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
 });

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html")
})



app.listen(3000);

/*
    Routing --- Code


*/