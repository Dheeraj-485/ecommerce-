import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
const Register = () => {
  const dispatch=useDispatch();
const [formData,setFormData] =useState({ 
  name:"",
  email:"",
  password:"",
})
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    // dispatch(registerUser(formData))
  
  }
  return (
    <div className=" min-h-screen w-full justify-center flex bg-slate-400 items-center">
      <div className="flex flex-col h-[50%] w-[30%] bg-blue-400 items-center gap-2 py-4 border rounded-md text-2xl">
        <form >  
            <div className="flex flex-col mx-2  font-bold my-2 ">
                <label htmlFor="name">Name</label>
                <input className="h-9 border rounded-md " type="text" name="name" placeholder="Enter name" />
            </div>
            <div className=" flex flex-col mx-2  font-bold my-2">
                <label htmlFor="email">Email</label>
                <input className="h-9 border rounded-md " type="email" name="email" placeholder="Enter Email" />
            </div>
            <div className=' flex flex-col mx-2  font-bold my-2'>
                <label htmlFor="pass">Password</label>
                <input className='h-9 border rounded-md'type="password" name="pass" placeholder="Enter Pass" />
            </div>
            <div className='button mx-2 my-2 '> 

            <button type="submit" className='bg-green-400 w-full my-2 p-1 border rounded-lg'>SignUp</button>
            </div>
        </form>

      </div>
    </div>
  )
}

export default Register