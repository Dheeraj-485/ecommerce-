const express=require("express");
const { createUser, loginUser } = require("../controllers/Auth");
// const { fetchUserById, updateUserById } = require("../controllers/User");
const router=express.Router();

// router.get("/:id",fetchUserById).patch("/:id",updateUserById)
router.post("/signup",createUser).post("/login",loginUser)

module.exports=router