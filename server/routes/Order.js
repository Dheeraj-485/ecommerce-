const { fetchOrderByUser, createOrder, updateOrder, deleteOrder } = require("../controllers/Order");

const express=require("express");
const router=express.Router();
// router.get("/user/:userId",fetchOrderByUser)
router.post("/",createOrder).patch("/:id",updateOrder).delete("/:id",deleteOrder)
router.get("/own/",fetchOrderByUser)
module.exports=router;