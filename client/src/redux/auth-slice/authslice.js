import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState={
    isLoading: false,
    isAuthenticated: false,

    signupData:null,
    loading:false,
    token:localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):null,
}

export const signupAsync=createAsyncThunk('auth/signupAsync',async(cred)=>{
  // const res=await signup(cred);
})
const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
      setSignupData(state,value){
        state.signupData=value.payload;
      },
      setLoadings(state,value){
        state.loading=value.payload;
      },
      setToken(state,value){
        state.token=value.payload;;
      },
    }
})


export const {setSignupData,setLoading,setToken}=authSlice.actions;
export default authSlice.reducer