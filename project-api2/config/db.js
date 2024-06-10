require("mongoose").connect("mongodb://0.0.0.0:27017/tss3")
.then(()=>{
    console.log("CONNECTED------")
    })
    .catch(()=>{
        console.log("NOT CONNECTED xxxxxxx")
})