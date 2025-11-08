const express = require("express");
const router = express.Router();
const authControl = require("../controllers/authController");

router.post('/jwt', authControl.createJwt);

module.exports = router;