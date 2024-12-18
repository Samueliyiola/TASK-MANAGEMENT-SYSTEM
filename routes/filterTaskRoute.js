const express = require("express");
const filterTask = require("../controllers/filterTaskController");

const router = express.Router();
router.get("/:tag", filterTask);


module.exports = router;
