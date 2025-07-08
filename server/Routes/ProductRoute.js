const express = require("express");
const route = express.Router();

const productController = require("../Controllers/ProductController");

route.get("/homepage", productController.homeDisplay);

module.exports = route;
