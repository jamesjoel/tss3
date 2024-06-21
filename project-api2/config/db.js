let mongo_uri_local = "mongodb://0.0.0.0:27017/tss3";
let mongo_uri_live = "mongodb+srv://jamessteppingstone:FtcrOJJ6LSITJPeB@cluster0.j1ogiym.mongodb.net/";



require("mongoose").connect(mongo_uri_live)
.then(()=>{
    console.log("CONNECTED------")
    })
    .catch((err)=>{
        console.log(err);
        console.log("NOT CONNECTED xxxxxxx")
})

/*

    uri : mongodb+srv://<username>:<password>@cluster0.j1ogiym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

    username : jamessteppingstone
    password : FtcrOJJ6LSITJPeB

*/