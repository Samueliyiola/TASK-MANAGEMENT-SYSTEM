const changeStatus = require("../controllers/changeStatusController.js");
const express = require("express");

const router = express.Router();

router.put("/:id", changeStatus);

module.exports = router;
