require("../config/db");

const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    name : String
})

const Cate = mongoose.model("category", CategorySchema)

module.exports = Cate;