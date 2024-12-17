const express = require("express");
const router = express.Router();
const registerAdminController = require("../controllers/registerAdminController");

router.post("/", registerAdminController);


module.exports = router;
