import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/user/feature/Home'
import Cart from '../components/user/feature/Cart'
import Shop from '../components/user/feature/Shop'
import Login from '../components/user/feature/Login'
import Signup from '../components/user/feature/Signup'
import About from '../components/user/feature/About'
import UserModule from '../module/UserModule'
import AdminModule from '../module/AdminModule'

import AdminLogin from '../components/admin/feature/Login'
import Dashboard from '../components/admin/feature/Dashobard'
import Setting from '../components/admin/feature/Setting'
import Product from '../components/admin/feature/Product'
import Category from '../components/admin/feature/Category'
import Orders from '../components/admin/feature/Orders'
import AddCategory from '../components/admin/feature/AddCategory'
import AddProduct from '../components/admin/feature/AddProduct'


const AllRoutes = () => {
  return (
    <>
        <Routes>
           <Route path='' element={<UserModule />}>
              <Route path='' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='cart' element={<Cart />} />
              <Route path='shop' element={<Shop />} />
              <Route path='about' element={<About />} />
           </Route>

           <Route path='admin' element={<AdminModule />}>
              <Route path='' element={<AdminLogin />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='product' element={<Product />} />
              <Route path='product/add' element={<AddProduct />} />
              <Route path='category' element={<Category />} />
              <Route path='category/add' element={<AddCategory />} />
              <Route path='orders' element={<Orders />} />
              <Route path='setting' element={<Setting />} />
           </Route>
        </Routes>
    </>
  )
}

export default AllRoutes