const mongoose= require("mongoose");
require("../config/db");
const AdminSchema=mongoose.Schema({
   name:String,
   password:String
},{collection:"Admin"})
let Admin=mongoose.model("Admin",AdminSchema);
module.exports=Admin
