require("../config/db");
const mongoose=require("mongoose");
let ProductSchema=mongoose.Schema({
    Name:String,
    sold:Number,
    price:Number 
},{collection:"product"})
let Product=mongoose.model("product",ProductSchema);
module.exports =Product;
