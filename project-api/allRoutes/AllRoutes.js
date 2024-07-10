const routes = require("express").Router();

routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/signup", require("../controllers/SignupController"));

module.exports = routes;