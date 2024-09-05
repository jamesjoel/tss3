const express =require("express");
const app= express();
const cors=require("cors");
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use (require("./Routes/allroutes"));
const port=process.env.PORT||3000;
app.listen(port, ()=>{
    console.log("Server is running on port number",port)
});
