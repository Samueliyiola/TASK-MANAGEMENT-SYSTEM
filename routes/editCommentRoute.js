const editCommment = require("../controllers/editComment");
const express = require("express");
const router = express.Router();

router.put("/", editCommment);

module.exports = router;

