const express=require("express");
const { createUser, loginUser,checkUser } = require("../controllers/Auth");
const passport = require("passport");
// const { fetchUserById, updateUserById } = require("../controllers/User");
const router=express.Router();

// router.get("/:id",fetchUserById).patch("/:id",updateUserById)
router.post("/signup",createUser).post("/login",passport.authenticate("local"),loginUser).get("/check",passport.authenticate("jwt"),checkUser)

module.exports=router