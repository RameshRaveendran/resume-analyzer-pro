const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.get("/register", authController.showRegister);
router.get("/login", authController.showLogin);

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/logout", authController.logout);

module.exports = router;
