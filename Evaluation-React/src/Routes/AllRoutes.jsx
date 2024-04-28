import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home'
import Login from '../Pages/Login';
import Product from '../Pages/Product';
import ProductDetails from '../Pages/ProductDetails';
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
   <Routes>
    <Route   path='/' element={<Home/>} />
    <Route   path='/login' element={<Login/>} />
    <Route   path='/product' element={<PrivateRoute><Product/></PrivateRoute>} />
    <Route   path='/products/:id' element={<ProductDetails/>} />
    <Route   path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>} />
    <Route   path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>} />

   </Routes>
  )
}

export default AllRoutes