const changeStatus = require("../controllers/changeStatus.js");
const express = require("express");
const router = express.Router();

router.put("/:id", changeStatus);

module.exports = router;