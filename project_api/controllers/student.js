const routes=requires("express").router();

routes.get("/",(req,res)=>{
    res.send({name:"poorvi"})
});
routes.get("/pass",(req,res)=>{
    res.send({name:"priiti"})
});
routes.get("/fail",(req,res)=>{
    res.send({name:"prachi"})
});
module.export=routes;