const mongoose=require("mongoose")
const {Schema} =mongoose;
const userSchema=new Schema({
    email:{type:String,required:true,unique:true},
    // password:{type:String,required:true,},
    password:{type:Buffer,required:true},
    role:{type:String,required:true,default:"user"},
    address:{type:[Schema.Types.Mixed]},
    name:{String},
    // orders:{type:[Schema.Types.Mixed]}
    salt:Buffer
})

const virtual=userSchema.virtual("id");
virtual.get(function(){
    return this._id;
})
userSchema.set("toJSON",{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){delete ret._id}
})
const User=new mongoose.model("Users",userSchema);
module.exports=User