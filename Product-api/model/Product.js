require("../config/db");
const mongoose=require("mongoose");
let ProductSchema=mongoose.Schema({
    title:String,
    price:Number,
    category:String,
    subcategory: String,
    quantity:Number,
    discount:Number,
    status:{type:Number,default:1},
    createAt :{type:Date , default: new Date()}
},{collection:"product"})
let Product=mongoose.model("product",ProductSchema);
module.exports =Product;
