const routes = require("express").Router();


routes.use("/api/product", require("../controllers/ProductController"));

module.exports = routes;