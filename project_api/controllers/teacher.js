const routes=requre("express").router();

routes.get("/",(req,res)=>{
    res.send({name:"suraj"})
});
routes.get("/phd",(req,res)=>{
    res.send({name:"aman"})
});
routes.get("/bachelor",(req,res)=>{
    res.send({name:"aakash"})
});
router.get("/master",(req,res)=>{
    res.send({name:"okhhh"})
});
module.export=routes;