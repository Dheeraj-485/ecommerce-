const Brand=require("../models/Brand")



exports.createBrands=async(req,res)=>{
    try {
        const brands=new Brand(req.body);
        const doc=await brands.save();

        return res.status(200).json({message:"Brands created successfully",doc})
    } catch (error) {
        return res.status(400).json({message:"Error creating brands",error:error.message})
    }
}
exports.fetchBrands=async(req,res)=>{
    try {
      const brands=await Brand.find({});
      return res.status(200).json({message:"Brands fetched successfully",brands});  
    } catch (error) {
        console.error("Error fetching brands",error)
        return res.status(400).json({message:"Error fetching branda",error:error.message})
    }
}