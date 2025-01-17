import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productFilterApi, productListAPi } from "./productListapi";

const initialState = {
  products: [],
  status: "idle",
  error:null
};

// export const fetchAllProducts = createAsyncThunk(
//   "products/fetchAllProduct",
//   async () => {
//     const response = await productListAPi();
//     return response.data
// //     if (response && response.data) {
// //         return Array.isArray(response.data) ? response.data : [];
// //     }
// //     throw new Error('Invalid API response format');
//   }
// );

export const fetchAllProducts = createAsyncThunk(
    "products/fetchAllProduct",
    async () => {
      const response = await productListAPi();
      if (response && Array.isArray(response.data)) {
        return response.data;
      }
      throw new Error('Invalid API response format');
    }
  );

export const fetchAllProductByFilterAsync=createAsyncThunk(
    "products/fetchByFilter",
    async({filter,sort})=>{
        const response = await productFilterApi({filter,sort});
        // return response.data;
        if (response && Array.isArray(response.data)) {
            return response.data;
          }
          throw new Error('Invalid API response format');
        }
    
)
export const fetchAllProductBySortAsync=createAsyncThunk(
    "products/fetchBySort",
    async(Sort)=>{
        const response = await productFilterApi(Sort);
        console.log("APi ffetch sort async",response);
        
        return response.data.products;
    }
)
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productTodo: (state) => {
      // Example: Reset products
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
        state.error=null
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload  || []; // Replace `+=` with correct logic.
      })
      .addCase(fetchAllProducts.rejected, (state,action) => {
        state.status="failed"
        state.error = action.error.message;
        console.log("fetch error rejected",action.error.message);
        
      })
      .addCase(fetchAllProductByFilterAsync.pending, (state) => {
        state.status = "loading";
        state.error=null
      })
      .addCase(fetchAllProductByFilterAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload  || []; // Replace `+=` with correct logic.
      }).addCase(fetchAllProductByFilterAsync.rejected,(state,action)=>{
        state.status="failed"
        state.error = action.error.message;
        console.log("fetch error rejected",action.error.message);
      })
      .addCase(fetchAllProductBySortAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductBySortAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload  || []; // Replace `+=` with correct logic.
      })
      
  },
});

export const { productTodo } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
