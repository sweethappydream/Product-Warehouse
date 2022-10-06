const express = require("express");
const router = express.Router();

const extraPropRoutes = require("./extraProp");
const productRoutes = require("./product");

router.use("/product", productRoutes);
router.use("/extraProp", extraPropRoutes);

module.exports = router;