const User = require("../models/User");

exports.createUser=async(req,res)=>{
    try {
        const user=new User(req.body);
        const doc=await user.save();
        res.status(200).json({message:"User created successfully",doc})
    } catch (error) {
        console.error("Error creating user");
        res.status(400).json({message:"Error creating user",error:error.message})
    }
}

exports.loginUser=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});
        if(!user){
            res.status(404).json({message:"user not found"})
        };
        if(req.body.password !==user.password){
            res.status(403).json({message:"Authentication failed,invalid pass"})
        }
     res.status(201).json({message:"User login successfully",data:{id:user.id,email:user.email,name:user.email}})


    } catch (error) {
        console.error("Error login user")
        res.status(400).json({message:"Error login user",error:error.message})
    }
}