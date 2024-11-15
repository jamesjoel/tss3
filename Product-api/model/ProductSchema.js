let mongoose=require("mongoose")
let ProductSchema=mongoose.Schema({
    title:String,
    price:Number,
    category:String,
    subcategory: String,
    quantity:Number,
    detail:String,
    discount:Number,
    image:String,
    status:{type:Number,default:1},
    createAt :{type:Date , default: new Date()}
},{collection:"Product"})
module.exports=ProductSchema