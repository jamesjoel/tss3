const routes = require("express").Router();


routes.use("/student", require("../controllers/StudentController"));
routes.use("/city", require("../controllers/CityController"));
routes.use("/user", require("../controllers/UserController"));
// routes.use("/teacher", require("../controllers/TeacherController"));
// routes.use("/about", require("../controllers/AboutController"));

module.exports = routes;