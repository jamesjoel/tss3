let express = require("express");
let app = express();

app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html")
});
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html")
});


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port);
    
});
