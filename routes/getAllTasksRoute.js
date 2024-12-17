const getAllTasks = require("../controllers/getAllTasksController");
const express = require("express");
const router = express.Router();

router.get("/", getAllTasks);


module.exports = router;