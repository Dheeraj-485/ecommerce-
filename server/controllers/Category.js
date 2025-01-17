const Category=require("../models/Category")


exports.createCategory=async(req,res)=>{
    try {
        const categories=new Category(req.body);
        const doc=await categories.save();

        return res.status(200).json({message:"Category created successfully",doc})
    } catch (error) {
        return res.status(400).json({message:"Error creating Categories",error:error.message})
    }
}

exports.fetchCategory=async(req,res)=>{
    try {
      const brands=await Category.find({});
      return res.status(200).json({message:"Category fetched successfully",brands});  
    } catch (error) {
        console.error("Error fetching category",error)
        return res.status(400).json({message:"Error fetching Category",error:error.message})
    }
}