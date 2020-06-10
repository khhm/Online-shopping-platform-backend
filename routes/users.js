const express = require("express");
const router = express.Router();

//const User = require('../models/user')

const userController = require("../controllers/user");

router.post("/register", userController.Register);

router.post("/login", userController.Login2);

module.exports = router;
