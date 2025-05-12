const express = require("express");
const router = express.Router();
const { signup, signin, getProfile } = require("../Controller/User.controller");
const authMiddleware = require("../Middleware/authMiddleware");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
