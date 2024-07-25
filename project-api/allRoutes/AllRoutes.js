const routes = require("express").Router();

routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/country", require("../controllers/CountryController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/subcategory", require("../controllers/SubCategoryController"));
routes.use("/api/signup", require("../controllers/SignupController"));
routes.use("/api/user/auth", require("../controllers/UserAuthController"));

module.exports = routes;