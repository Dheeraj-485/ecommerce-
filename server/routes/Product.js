const express=require("express");
const { createProduct, fetchAllproducts, fetchproductById, updateProduct } = require("../controllers/Product");
const router=express.Router();

router.post("/",createProduct);
router.get("/",fetchAllproducts)
router.get("/:id",fetchproductById)
router.put("/:id",updateProduct)

module.exports=router;