require("../config/db");
const mongoose=require("mongoose");
let ProductSchema=require('./ProductSchema');
let Product=mongoose.model("Product",ProductSchema);
module.exports =Product;
