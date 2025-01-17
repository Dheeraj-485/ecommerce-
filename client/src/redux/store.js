import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./auth-slice/authslice"
import productReducer from "./features/productList/productListslice"
// import productReducer from "./features/productList/components/productListslice"

export const store=configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer
    }
})