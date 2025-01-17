import { addToCart, deleteFromCart, fetchCartByUser, updateCart } from "../controllers/Cart";

const express=require("express")
const router=express.Router();

router.post("/",addToCart).get("/",fetchCartByUser).delete("/:id",deleteFromCart).patch("/:id",updateCart)

module.exports=router