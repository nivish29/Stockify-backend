
const productController = require("./productController");
const express = require("express");
const jwt_validation = require("./../auth/jwt_validation");
const app = express.Router();

app.get("/", jwt_validation.checkJwt, productController.getProductsList);
app.post("/", jwt_validation.checkJwt, productController.addProduct);
app.get(
  "/search-product",
  jwt_validation.checkJwt,
  productController.searchProduct
);

module.exports = app;