const createTask = require("../controllers/createTaskController");
const express = require ("express");
const router = express.Router();

router.post("/", createTask);


module.exports = router;