const routes = require("express").Router();


routes.use("/api/student", require("../controllers/StudentController"));
routes.use("/api/teacher", require("../controllers/TeacherController"));
routes.use("/api/staff", require("../controllers/StaffController"));

module.exports = routes;