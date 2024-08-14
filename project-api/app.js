const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("express-fileupload")

app.use(cors());
app.use(upload());

app.use(express.static(__dirname+"/assets"))

app.use(express.urlencoded({ extended : true }));
app.use(express.json())

app.use(require("./allRoutes/AllRoutes"));


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})