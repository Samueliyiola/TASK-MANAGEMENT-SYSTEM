const express = require('express');
const getAllUsersController = require("../controllers/getAllUsersController")
const router = express.Router();

router.get("/", getAllUsersController);


module.exports = router;