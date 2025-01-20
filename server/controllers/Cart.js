const Cart = require("../models/Cart");

exports.addToCart=async(req,res)=>{
    try {
 const {id}=req.user;

        const cart=new Cart({...req.body,user:id});
        const result=await cart.populate("product");
        res.status(201).json({message:"Cart item added",result})
    } catch (error) {
        res.status(400).json({message:"Error adding cart item",error:error.message})

        
    }
}

exports.fetchCartByUser=async(req,res)=>{
    try {
        // const {user}=req.query; //we will fetch using user id 
        const {id}=req.user;
        const cartItems=await Cart.find({user:id}).populate("user").populate("product");
        res.status(200).json({message:"Cart items fetched successfully",cartItems})

    } catch (error) {
        res.status(400).json({message:"Error fetching cart item",error:error.message})
        
    }
}


exports.deleteFromCart=async(req,res)=>{
    try {
        const {id}=req.params;
        const cart=await findByIdAndDelete(id,{new:true});

        res.status(200).json({message:"Cart deleted successfully",cart})
        
    } catch (error) {
        res.status(400).json({message:"Error deleting cart item",error:error.message})
    }
}
exports.updateCart=async(req,res)=>{
    try {
        const {id}=req.params;
        const cart=await findByIdAndUpdate(id,req.body,{new:true});
        const result=await cart.populate("product")

        res.status(200).json({message:"Cart updated successfully",result})
        
    } catch (error) {
        res.status(400).json({message:"Error updating cart item",error:error.message})
    }
}

