const express = require ("express");
const createTask = require("../controllers/createTaskController");
const router = express.Router();

router.post("/:id", createTask);


module.exports = router;