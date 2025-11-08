const express = require("express");
const router = express.Router();
const usersControl = require("../controllers/usersController");

router.get("/", usersControl.getUsers);
router.post("/register", usersControl.register);
router.post("/login", usersControl.login);

module.exports = router;