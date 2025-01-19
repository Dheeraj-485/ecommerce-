const { fetchOrderByUser, createOrder, updateOrder } = require("../controllers/Order");

const express=require("express");
const router=express.Router();
router.get("/user/:userId",fetchOrderByUser).post("/",createOrder).patch("/:id",updateOrder).delete("/:id",deleteOrder)