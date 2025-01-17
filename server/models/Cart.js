const mongoose=require("mongoose")

const Schema=mongoose.Schema;
const cartSchema=new Schema({
quantity:{type:Number,required:true},
product:{type:Schema.Types.ObjectId,ref:"Products",required:true},//ref is used to fetch all the info from product
user:{type:Schema.Types.ObjectId,ref:"User",required:"true"}
})


const virtual=cartSchema.virtual("id");
virtual.get(function(){
    return this._id;
})
cartSchema.set("toJSON",{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){delete ret._id}
})
const Cart=new mongoose.model("Cart",cartSchema);
module.exports=Cart