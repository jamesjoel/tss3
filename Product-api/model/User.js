require("../config/db")
const mongoose=require("mongoose");
UserSchema=mongoose.Schema({
    Username:String
    ,User:String
    ,password:String
    ,repass:String
    ,address:String
    ,pincode:Number
    ,contact :Number
    ,city:String
    ,Gender:String

},{collection:"User"})
let User=mongoose.model("User",UserSchema);
module.exports=User;
