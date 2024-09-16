import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Shop from './components/features/User/Shop'
import Home from  './components/features/User/Home'
import Cart from  './components/features/User/Cart'
import Login from  './components/features/User/Login'
import SignUP from  './components/features/User/SignUP'
import UserModule from '../module/UserModule'
import AdminModule from '../module/AdminModule'
import AdminLogin from '../src/components/features/Admin/AdminLogin'
import Dashboard from '../src/components/features/Admin/Dashboard'
import ProductsList from './components/features/Admin/ProductsList'
import Category from './components/features/Admin/Category'
import AddCategory from './components/features/Admin/AddCategory'
import UserList from './components/features/Admin/UserList'
import SubCategory from './components/features/Admin/SubCategory'
import AddSubCate from './components/features/Admin/AddSubCate'
import Products from './components/features/Admin/Products'
const Allroutes = () => {
 return (
    <>
      <Routes>
        <Route path='' element={<UserModule/>}>
        <Route path='Home' element={<Home/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='SignUp' element={<SignUP/>}/>
        </Route>
       <Route path='Admin' element={<AdminModule/>}>
       <Route path='Login' element={<AdminLogin/>}/>
       <Route path='Dashboard' element={<Dashboard/>}/>
       <Route path='Product/Add' element={<Products/>}/>
       <Route path='Product' element={<ProductsList/>}/>
       <Route path='Category' element={<Category/>}/>
       <Route path='Category/Add' element={<AddCategory/>}/>
       <Route path='User' element={<UserList/>}/>
       <Route path='SubCategory' element={<SubCategory/>}/>
       <Route path='SubCategory/Add' element={<AddSubCate/>}/>
      </Route>
      
  
      </Routes>
    
    </>
  )
}

export default Allroutes