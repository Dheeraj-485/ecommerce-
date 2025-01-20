const express=require("express");
const { createUser, loginUser,checkAuth } = require("../controllers/Auth");
const passport = require("passport");
// const { fetchUserById, updateUserById } = require("../controllers/User");
const router=express.Router();

// router.get("/:id",fetchUserById).patch("/:id",updateUserById)
router.post("/signup",createUser).post("/login",passport.authenticate("local"),loginUser).get("/check",passport.authenticate("jwt"),checkAuth)

module.exports=router