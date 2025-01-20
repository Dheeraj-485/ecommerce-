const express=require('express')
const app = express()
const mongoose=require('mongoose')
require("dotenv").config();

const crypto=require("crypto")
const jwt=require("jsonwebtoken")
const cors=require('cors')
const session =require("express-session")
const passport=require("passport");
const localStrategy=require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const cookieParser=require("cookie-parser")

const { createProduct } = require('./controllers/Product');
const Productroutes=require("./routes/Product")
const categoryRoutes=require("./routes/Category")
const brandRoutes=require("./routes/Brands")
const userRoutes=require("./routes/User")
const authRoutes=require("./routes/Auth")
const cartRoutes=require("./routes/Cart")
const orderRoutes=require("./routes/Order");
const User = require('./models/User');
const { isAuth, sanitizeUser,cookieExtractor } = require('./services/common');

const SECRET_KEY="SECRET_KEY";

//JWT OPtions
const opts={};
// opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
opts.jwtFromRequest=cookieExtractor;
opts.secretOrKey=SECRET_KEY; //TODO should not be in code;

//middlewares


app.use(express.static("build"));
app.use(cookieParser());

app.use(
    session({
        secret:"keyboard cat",
        resave:false, //don't save session if unmodified
        saveUninitialized:false //don't save session until something stored'
    })
);

app.use(passport.authenticate("session"));
app.use(
    cors({
        exposedHeaders:['X-Total-Count']
    })
)




// app.use(cors())
app.use(express.json())




app.use("/products",isAuth(),Productroutes);
//we can also use JWT token for client onlt auth
app.use("/category",isAuth(),categoryRoutes)
app.use("/brands",isAuth(),brandRoutes)
app.use("/users",isAuth(),userRoutes)
app.use("/auth",authRoutes)
app.use("/cart",isAuth(),cartRoutes)
app.use("/order",isAuth(),orderRoutes)


//Passport strategies
passport.use(
    'local',
    new localStrategy(
        {usernameField:"email"},
        async function(username,password,done){
        //by default passport uses username
        try {
            
         const user=await User.findOne({email:email});
         console.log(email,password,user);
         if(!user){
            return done(null,false,{message:"Invalid credentials"}); //for safety reasons
         }
         crypto.pbkdf2(
            password,
            user.salt,
            310000,
            32,
            "sha256",

            async function (err,hashedPassword){
                if(!crypto.timingSafeEqual(user.password,hashedPassword)){
                    return done(null,false,{message:"Invalid credentials"}); //for safety reasons
                }
                const token =jwt.sign(sanitizeUser(User),SECRET_KEY)
                done(null,{token});
            }
         )
         
         

        } catch (error) {
            done(err);
        }
    })
)

passport.use(
    'jwt',
    new JwtStrategy(opts, async function (jwt_payload, done) {
      console.log({ jwt_payload });
      try {
        // const user = await User.findOne({ id: jwt_payload.sub });
        const user = await User.findById(  jwt_payload.id );
        if (user) {
          return done(null, sanitizeUser(user)); // this calls serializer
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );

// this creates session variable req.user on being called from callbacks
passport.serializeUser(function (user, cb) {
    console.log('serialize', user);
    process.nextTick(function () {
      return cb(null, { id: user.id, role: user.role });
    });
  });

// this changes session variable req.user when called from authorized request

passport.deserializeUser(function (user, cb) {
    console.log('de-serialize', user);
    process.nextTick(function () {
      return cb(null, user);
    });
  });


  mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("DB connected")
).catch((err)=>console.log("Error connecting to MongoDB",err))


const port=8000;
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
    
})