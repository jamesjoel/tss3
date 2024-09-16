const mongoose = require("mongoose");
require("../config/db");
const SubCategorySchema = mongoose.Schema({
    category:String,
    name:String
},{collection:"SubCategory"});
let SubCategory= mongoose.model("SubCategory",SubCategorySchema);
module.exports= SubCategory;