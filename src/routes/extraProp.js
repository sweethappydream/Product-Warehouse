const express = require("express");
const router = express.Router();

const controller = require("../controllers/extraProp");

router.get("/list", controller.getAllList);

module.exports = router;