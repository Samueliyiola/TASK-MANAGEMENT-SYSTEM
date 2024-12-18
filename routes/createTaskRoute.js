const createTask = require("../controllers/createTaskController");
const express = require ("express");
const router = express.Router();

router.post("/:id", createTask);


module.exports = router;