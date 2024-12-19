const addComment = require("../controllers/addCommentController");

const express = require("express");
const router = express.Router();

router.post("/:id", addComment);


module.exports = router;