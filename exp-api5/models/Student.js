require("../config/db");

const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name : String,
    fee : Number,
    class : Number, 
    gender : String
})

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;