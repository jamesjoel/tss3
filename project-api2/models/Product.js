require("../config/db");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title : String,
    price : Number,
    detail : String,
    quantity : Number,

})

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;