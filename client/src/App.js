import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AuthLayout from './components/auth/AuthLayout'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import ProductList from './redux/features/productList/components/ProductList'
import Navbar from './redux/features/navbar/Navbar'
import Cart from './redux/features/cart/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import ProductDetails from './redux/features/productList/components/ProductDetails'


const App = () => {
  return ( <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productDetails" element={<ProductDetails/>}/>
       
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>}/>
    
    </Routes>
  </>
  )
}

export default App