const routes =require("express").router();
routes.get("/",(req,res)=>{
    res.send("/staff")
})
routes.get("/staff/",(req,res)=>{
    res.send({name :"poorvi"})
});
routes.get("/office",(req,res)=>{
    res.send({name:"poorvi"});
})
routes.get("/office/demo",(req,res)=>{
    res.send({name:"poorvi"});
})