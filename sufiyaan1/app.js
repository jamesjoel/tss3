let express = require("express");
let app = express();

app.use(require("./routes"));

app.listen(3000, ()=>{
    console.log("server running with port 3000");
});




