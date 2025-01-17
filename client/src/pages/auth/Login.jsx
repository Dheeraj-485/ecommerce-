import React from 'react'

const Login = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 flex justify-center items-center ">
    <div className="bg-white flex flex-col border rounded-lg h-[50%] max-w-lg mx-auto w-[60%] shadow-slate-300 items-center m-2 p-2 text-[1.4rem] "> 
        <form className="min-h-96 px-8 py-6 mt-4 text-left bg-white"> 
           <h3 className="m-0 text-[15px] font-semibold dark:text-white">Login to your Account</h3>
           <p className="m-0 text-xs mas-w-[90%] text-center text-slate-300">Get Started</p>
           <div className="flex flex-col my-2 w-full gap-2">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username"/>

           </div>
           <div className="flex flex-col my-2">
            <label>Password</label>
            <input type="password" name="username" placeholder="Username"/>

           </div>
           <div className="mt-5">
                <button class="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Login</button>
            </div>

        </form>

    </div>
      
    </div>
  )
}

export default Login