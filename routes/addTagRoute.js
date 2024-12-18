const addTag = require("../controllers/addTagController");
const express = require("express");
const router = express.Router();

router.put("/:id", addTag);

module.exports = router;