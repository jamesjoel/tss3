require("../config/db");
const mongoose=require("mongoose");
let ProductSchema=mongoose.Schema({
    title:String,
    price:Number,
    category:String,
    subcategory: String,
    quantity:Number,
    discount:Number,
    image:String,
    status:{type:Number,default:1},
    createAt :{type:Date , default: new Date()}
},{collection:"Product"})
let Product=mongoose.model("Product",ProductSchema);
module.exports =Product;
