const express=require('express')
const app = express()
const mongoose=require('mongoose')
require("dotenv").config();
const Productroutes=require("./routes/Product")
const categoryRoutes=require("./routes/Category")
const brandRoutes=require("./routes/Brands")
const userRoutes=require("./routes/User")
const authRoutes=require("./routes/Auth")
const cors=require('cors')
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("DB connected")
).catch((err)=>console.log("Error connecting to MongoDB",err))


app.use("/products",Productroutes)
app.use("/category",categoryRoutes)
app.use("/brands",brandRoutes)
app.use("/users",userRoutes)
app.use("/auth",authRoutes)

const port=8000;
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
    
})