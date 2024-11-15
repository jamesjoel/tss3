const mongoose = require("mongoose");
require("../config/db");
let ProductSchema=require('./ProductSchema')
const CartSchema = mongoose.Schema({
   userid:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
   Product:{type:[mongoose.Schema.Types.ObjectId],ref:'product',default:[]}
},{collection:"Cart"});
let Cart= mongoose.model("Cart",CartSchema);
module.exports= Cart