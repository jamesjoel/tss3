require("../config/db");
let mongoose = require("mongoose");
let TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    subject : String
}) 
let Teacher = mongoose.model("teacher", TeacherSchema);

module.exports = Teacher;