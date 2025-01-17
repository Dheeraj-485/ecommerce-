const User = require("../models/User");




exports.fetchUserById=async(req,res)=>{
    try {
        const {id}=req.params;
        const doc=await User.find(id,"email name id").exec();
        res.status(201).json({message:"user fetched successfully",doc})
    } catch (error) {
        console.error("Error fetching user")
        res.status(400).json({message:"Error fetching user",error:error.message})
    }
}
exports.updateUserById=async(req,res)=>{
    try {
        const {id}=req.params;
        const doc=await User.findByIdAndUpdate(id,req.body).exec();
        res.status(201).json({message:"user updated successfully",doc})
    } catch (error) {
        console.error("Error updating user")
        res.status(400).json({message:"Error updating user",error:error.message})
    }
}