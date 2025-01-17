const express=require("express");
const { fetchBrands, createBrands } = require("../controllers/Brands");
const router=express.Router();
router.get("/",fetchBrands)
router.post("/",createBrands)
module.exports=router;