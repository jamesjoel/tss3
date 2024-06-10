const routes = require("express").Router();


routes.use("/api/v1/product", require("../controllers/ProductController"));


module.exports = routes;