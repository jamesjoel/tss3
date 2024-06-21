const express = require("express");
const app = express();


app.use(require("./routes/AllRoutes"));


app.listen(3000, ()=>{
    console.log("running");
})