import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = ({children}) => {
  return (
    <div>
        <div>

        AuthLayout
        </div>
        <div>
            <Outlet/>
        </div>
        </div>
  )
}

export default AuthLayout