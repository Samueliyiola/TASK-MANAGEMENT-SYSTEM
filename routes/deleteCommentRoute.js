const deleteComment = require("../controllers/deleteCommentController");
const express = require("express");
const router = express.Router();

router.delete("/:id", deleteComment);

module.exports = router;