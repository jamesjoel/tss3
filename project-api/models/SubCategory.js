require("../config/db");

const mongoose = require("mongoose");

const SubCategorySchema = mongoose.Schema({
    name : String,
    category : String
})

const SubCate = mongoose.model("subcategory", SubCategorySchema)

module.exports = SubCate;