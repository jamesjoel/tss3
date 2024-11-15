import React, { useEffect } from 'react'
import {Outlet, Route,Routes, useNavigate} from 'react-router-dom'
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
import Logout from './components/features/User/Logout'
import AdminLogout from './components/features/Admin/AdminLogout'
import Profile from './components/features/User/Profile'
import UserUpdate from './components/features/User/UserUpdate'
import ChangePass from './components/features/User/ChangePass'
import AdminSetting from './components/features/Admin/AdminSetting'
import Product_detail from './components/shared/User/Product_detail'
import Checkout from './components/shared/User/Checkout'

const Allroutes = () => {
 return (
    <>
      <Routes>
        <Route path='' element={<UserModule/>}>
        <Route path='' element={<Home/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='SignUp' element={<SignUP/>}/>
        <Route path='Shop/Product/Detail' element={<Product_detail/>}/>
        <Route path='Shop/Product/Detail/:id' element={<Product_detail/>}/>
       <Route path='Checkout'element={<Checkout/>}/>
       <Route path='Checkout/:id'element={<Checkout/>}/>
         {/* <Route path ='' element={<UserProtectedroutes/>} */}
      <Route path='logout' element={<Logout/>}/>
       <Route path='Profile'element={<Profile/>}/>
       <Route path ='Profile/Update' element={<UserUpdate/>}/>
       <Route path='Profile/ChangePass' element={<ChangePass/>}/>
        {/* </Route>  */}
        </Route>
       <Route path='Admin' element={<AdminModule/>}>
       <Route path='' element={<AdminLogin/>}/>
      <Route path=''element={<AdminProtectedroutes/>}>
      <Route path='Logout' element={<AdminLogout/>}/>
       <Route path='Dashboard' element={<Dashboard/>}/>
       <Route path='Product/Add' element={<Products/>}/>
       

       <Route path='Product' element={<ProductsList/>}/>
       <Route path='Category' element={<Category/>}/>
       <Route path='Category/Add' element={<AddCategory/>}/>
       <Route path='Category/edit/:a' element={<AddCategory/>}/>
       <Route path='User' element={<UserList/>}/>
       <Route path='Setting' element={<AdminSetting/>}/>
       <Route path='SubCategory' element={<SubCategory/>}/>
       <Route path='SubCategory/Add' element={<AddSubCate/>}/>
       <Route path='SubCategory/edit/:a' element={<AddSubCate/>}/>
      </Route>
      </Route>
       </Routes>
    
    </>
  )

}
let AdminProtectedroutes=()=>{
  let navigate=useNavigate();
  // this token will check admin token is present or nor if there is token present then this will open othr pages
  useEffect(()=>{
    if(!localStorage.getItem("access-token"))
    {
      navigate("/Admin")
    }
  },[])
  return(
    <Outlet/>
  )
}
 let UserProtectedroutes=()=>{
   let  navigate=useNavigate();
 useEffect(()=>{
   if(!localStorage.getItem("user-access"))
   {
     navigate("/login")
   }
 },[])
 return(
  <Outlet/>
)
 }
export default Allroutes
