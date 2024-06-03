const express= require("express");
const app=express();

app.use(require("./routes/Allroutes"));
app.listen(3000);
// (./stay in current location)