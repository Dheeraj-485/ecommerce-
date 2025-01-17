const express=require("express");
const { fetchUserById, updateUserById } = require("../controllers/User");
const router=express.Router();

router.get("/:id",fetchUserById).patch("/:id",updateUserById)

module.exports=router