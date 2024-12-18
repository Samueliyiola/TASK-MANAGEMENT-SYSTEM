const express = require("express");
const changeStatus = require("../controllers/changeStatusController");


const router = express.Router();

router.patch("/", changeStatus);

module.exports = router;
