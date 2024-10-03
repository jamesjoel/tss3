require("../config/db")
const mongoose=require("mongoose");
UserSchema=mongoose.Schema({
    username:String
    ,email:String
    ,password:String
    ,address:String
    ,pincode:Number
    ,contact :Number
    ,state:String
    ,city:String
    ,gender:String
    ,createdAt:{
        type :String
        ,default:Date.now()
    },
    status:{type:Number,
        default :1
    }

},{collection:"User"})
let User=mongoose.model("User",UserSchema);
module.exports=User;
