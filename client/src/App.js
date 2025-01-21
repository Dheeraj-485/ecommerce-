import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages1/Home'



const App = () => {
  return ( <>
  {/* <Navbar/> */}
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
  </>
  )
}

export default App
// import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import AuthLayout from './components/auth/AuthLayout'
// import Register from './pages/auth/Register'
// import Login from './pages/auth/Login'
// import ProductList from './redux/features/productList/components/ProductList'
// import Navbar from './redux/features/navbar/Navbar'
// import Cart from './redux/features/cart/Cart'
// import Checkout from './pages/Checkout'
// import Home from './pages/Home'
// import ProductDetails from './redux/features/productList/components/ProductDetails'
// import ProductDetailPage from './pages/ProductDetail'
// import CartPage from './pages/Cart'
// import LoginPage from './pages/auth/Login'


// const App = () => {
//   return ( <>
//   <Navbar/>
//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/productDetails" element={<ProductDetailPage/>}/>
       
//       <Route path="/signup" element={<Register/>}/>
//       <Route path="/login" element={<LoginPage/>}/>
//       <Route path="/cart" element={<CartPage/>} />
//       <Route path="/checkout" element={<Checkout/>}/>
    
//     </Routes>
//   </>
//   )
// }

// export default App