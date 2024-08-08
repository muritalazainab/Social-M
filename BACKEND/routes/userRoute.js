const express = require("express");
const { register, login, getUser,  deleteUser, getAllUser, updateUser, logoutUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/:userId", getUser)
router.delete("/:userId", deleteUser)
router.get("/", getAllUser)
router.patch("/:userId", updateUser, )
router.post("/logout", logoutUser)


module.exports = router;