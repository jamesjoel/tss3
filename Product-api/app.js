const express =require("express");
const app= express();
const cors=require("cors");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use (require("./Routes/allroutes"));

const port=process.env.PORT||3001;


app.listen(port, ()=>{
    console.log("Server is running on port number",port)
});
