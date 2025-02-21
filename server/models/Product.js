const mongoose=require("mongoose")

const Schema=mongoose.Schema;
const productSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:[0,"wrong min price"],
        max:[1000,"wrong max prie"],
        // required:true
    },
    discountPercentage:{
        type:Number,
        min:[1,"wrong min discount"],
        max:[99,"wrong max discount"],

        // required:true
    },
    rating:{
        type:Number,
        min:[1,"wrong min rating"],
        max:[5,"wrong max rating"],
        default:1,
        // required:true

    },
    stock:{
        type:Number,
        min:[0,"wrong min stock"],
        max:[5,"wrong max stock"],
        required:true
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    images:{
        type:[String],
        required:true,
    },
    deleted:{
        type:Boolean,
        default:false
    }
})


const virtual=productSchema.virtual("id");
virtual.get(function(){
    return this._id;
})
productSchema.set("toJSON",{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){delete ret._id}
})
const Product=new mongoose.model("Products",productSchema);
module.exports=Product