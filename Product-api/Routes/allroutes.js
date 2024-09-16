const routes= require("express").Router();
routes.use("/api/Product",require("../Controllers/ProductController"));
routes.use("/api/City",require("../Controllers/CityContoller"));
routes.use("/api/User",require("../Controllers/UserController"));
routes.use("/api/Category",require("../Controllers/CategoryController"));
routes.use("/api/Auth", require("../Controllers/AuthController"));
routes.use("/api/SubCategory",require("../Controllers/SubCategoryController"))
module.exports=routes;