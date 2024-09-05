const mongoose = require("mongoose");
require("../config/db");
const CategorySchema = mongoose.Schema({
    category:String
},{collection:"Category"});
let Category= mongoose.model("Category",CategorySchema);
module.exports= Category
