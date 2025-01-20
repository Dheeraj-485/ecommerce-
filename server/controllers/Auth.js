const User = require("../models/User");
const { sanitizeUser } = require("../services/common");
const SECRET_KEY="SECRET_KEY"
const jwt=require("jsonwebtoken")
const crypto=require("crypto")

exports.createUser=async(req,res)=>{
    try {
        // const user=new User(req.body);

const salt=crypto.randomBytes(16);
     crypto.pbkdf2(
    req.body.password,
    salt,
    310000,
    32,
    "sha256",
    async function(err,hashedPassword) {
        const user=new User({...req.body,password:hashedPassword,salt})
        const doc=await user.save();

        req.login(sanitizeUser(doc),(err)=>{
            if(err){
                res.status(400).json(err);
            }else {
                const token=jwt.sign(sanitizeUser(doc),SECRET_KEY);
                res.cookie('jwt',token,{
                 expires:new Date(Date.now() + 360000),
                 httpOnly:true
                }).status(201).json(token)
            }
        })
    }
)

        // const doc=await user.save();
        // res.status(200).json({message:"User created successfully",id:doc.id,role:doc.role})
    } catch (error) {
        console.error("Error creating user");
        res.status(400).json({message:"Error creating user",error:error.message})
    }
}

// exports.loginUser=async(req,res)=>{
//     try {
//         const user=await User.findOne({email:req.body.email});
//         if(!user){
//             res.status(404).json({message:"user not found"})
//         };
//         if(req.body.password !==user.password){
//             res.status(403).json({message:"Authentication failed,invalid pass"})
//         }

//         //TODO- we will make addresses independent of login
//      res.status(201).json({message:"User login successfully",data:{id:user.id,role:user.role}})


//     } catch (error) {
//         console.error("Error login user")
//         res.status(400).json({message:"Error login user",error:error.message})
//     }
// }


exports.loginUser=async(req,res)=>{
    res.cookie("jwt",req.user.token,{
        expires:new Date(Date.now() + 3600000),
        httpOnly:true
    }).status(201).json({message:"Login"},req.user) // because we will directly login using create user
}


exports.checkUser=async(req, res)=>{
    res.json({ status:"success",user:req.user});
}
