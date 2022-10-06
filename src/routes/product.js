const express = require("express");
const router = express.Router();

const controller = require("../controllers/product");
router.post("/add", controller.addProduct);
router.get("/list", controller.getProductList);

module.exports = router;

