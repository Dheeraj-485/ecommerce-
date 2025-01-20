const { addToCart, deleteFromCart, fetchCartByUser, updateCart } = require("../controllers/Cart");

const express=require("express")
const router=express.Router();

router.post("/",addToCart).get("/",fetchCartByUser).delete("/:id",deleteFromCart).patch("/:id",updateCart)

module.exports=router