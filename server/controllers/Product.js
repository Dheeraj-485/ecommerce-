const  Product = require("../models/Product");

exports.createProduct=async(req,res)=>{
    try {
        const product=new Product(req.body); //Product me req.body frontend se aayega
       const response= await product.save();
        return res.status(200).json({status:"success",message:"Product successfully created",response});

    } catch (error) {
        console.error("Error creating product");
        return res.status(400).json({message:"Error creating product",error:error.message})
    }
}

// exports.fetchAllproducts=async(req,res)=>{
//     //  here are all query string 
//     // filter ={"category":["smartphone","laptops"]}
//     //sort ={_sort:"price",_order="desc"}
//     // pagination={_page:1,_limit:10}
//     let query=await Product.find();


//     if (req.query.category){
//        query= query.find({category:req.query.category})
//    }
//    if (req.query.brand){
//       query= query.find({brand:req.query.brand});
//   }  
//     if(req.query._sort && req.query._order){
//         query= query.sort({[req.query._sort]:req.query._order});
//     }
//     if (req.query._page && req.query._limit){
//         const pageSize=req.query._limit; 
//         const page=req.query._page; 

//         query= query.skip(pageSize*(page-1)).limit(pageSize); //30*2-1
//     }  

//     try {
//       const doc=await query.exec();
      
//       return res.status(200).json({message:"Products successfully fetched",data:doc})
      

//     } catch (error) {
//         console.error("Error fetching products",error);
//         return res.status(400).json({message:"Error fetching products",error:error.message})
//     }
// }


exports.fetchAllproducts = async (req, res) => {
    // Initialize the query object for filtering
    //TODO we have to try with multiple categories -- laptops,electronics,tabs,mobiles,furniture
    // let query = Product.find({deleted:{$ne:true}}); // Start with the base query
    // let totalProductsQuery=Product.find({deleted:{$ne:true}});

    let condition={};
    if(!req.query.admin){
        condition.deleted={$ne:true};
    }

    let query=Product.find(condition);
    let totalProductsQuery=Product.find(condition)
    

    
    // Apply filters based on category and brand
    if (req.query.category) {
        query = query.find({ category: req.query.category });
       totalProductsQuery = totalProductsQuery.find({ category: req.query.category });

    }
    if (req.query.brand) {
        query = query.find({ brand: req.query.brand });
        totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
    }
    
    // Apply sorting if specified
    if (req.query._sort && req.query._order) {
        totalProductsQuery = totalProductsQuery.sort({ [req.query._sort]: req.query._order === "desc" ? -1 : 1 });
    }
    
    const totalDocs=await totalProductsQuery.countDocuments().exec();
    console.log(totalDocs);

    // Apply pagination if specified
    if (req.query._page && req.query._limit) {
        const pageSize = parseInt(req.query._limit, 10);
        const page = parseInt(req.query._page, 10);
        query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }
    
    try {
        // Execute the final query
        const doc = await query.exec();
        
        console.log(doc);
        res.set("X-total-Count",totalDocs)
        
        
        return res.status(200).json({ 
            message: "Products successfully fetched",
            data: doc
        });
    } catch (error) {
        console.error("Error fetching products", error);
        return res.status(400).json({
            message: "Error fetching products",
            error: error.message
        });
    }
};

exports.fetchproductById=async(req,res)=>{
    try {
        const id=req.params.id;
        const fetched=await Product.findById(id);
        return res.status(200).json({message:" Single Product fetched successfully",fetched})
    } catch (error) {
        console.error("Error fetching products",error)
        return res.status(400).json({message:"Error fetching single product",error:error.message})
    }
}
exports.updateProduct=async(req,res)=>{
    try {
        const id=req.params.id;
        const fetched=await Product.findByIdAndUpdate(id,req.body,{new:true});
        return res.status(200).json({message:"  Product Updated successfully",fetched})
    } catch (error) {
        console.error("Error Updating",error)
        return res.status(400).json({message:"Error Updating single product",error:error.message})
    }
}