const express = require("express");
const { register, login, getUser,  deleteUser, getUsers, updateUser, logoutUser } = require("../controllers/userController");
const { protect } = require('../controllers/middleware/authMiddleware'); 
const router = express.Router();

router.post("/register",  register)
router.post("/login", login)
router.get("/:userId", protect, getUser)
router.delete("/:userId", deleteUser)
router.get("/",  getUsers)
router.patch("/:userId", updateUser, )
router.post("/logout", logoutUser)
module.exports = router;