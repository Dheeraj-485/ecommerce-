const { Order } = require("../models/Order");



//These orders are to be accessed by admin i think
exports.fetchOrderByUser=async(req,res)=>{
    try {
        
    
    const {userId}=req.params;
    const result=await Order.find({user:userId}).exec();
    res.status(200).json({message:"Successfully fetched order",result});

} catch (error) {
    console.error("Error fetching order");
    res.status(500).json({message:"Error fetching order",error:error.message});    

}};


exports.fetchAllOrders=async(req,res)=>{
    try {
      
      // sort = {_sort:"price",_order="desc"}
    // pagination = {_page:1,_limit=10}

    const query=await Order.find({deleted:{$ne:true}})
    const totalOrdersquery=await Order.find({deleted:{$ne:true}})

    if(req.query._sort && req.query._order){
        query= query.sort({[req.query._sort]:req.query._order})
    }
    const totalDocs=await totalOrdersquery.count().exec();
    console.log({totalDocs});
    
    if(req.query._page && req.query._limit){
        const pageSize=req.query._limit;
        const page=req.query._page;

        query=query.skip(pageSize*(page-1)).limit(pageSize);
    }
    const docs = await query.exec();
      res.set('X-Total-Count', totalDocs);
      res.status(200).json(docs);
        
    } catch (error) {
        res.status(400).json({message: "Error fetching all orders",error:error.message});
    }
}

exports.createOrder=async(req,res)=>{
    try {
        const doc=new Order(req.body);
        res.status(201).json({message:"Successfully created order",doc})

    } catch (error) {
        console.error("Error creating order")
        res.status(500).json({message:"Error creating order",error:error.message})
    }
}

exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
    const order = await Order.findByIdAndDelete(id);
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};
