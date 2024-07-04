import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/feature/Home'
import Cart from '../components/feature/Cart'
import Shop from '../components/feature/Shop'
import Login from '../components/feature/Login'
import Signup from '../components/feature/Signup'
import About from '../components/feature/About'


const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='cart' element={<Cart />} />
            <Route path='shop' element={<Shop />} />
            <Route path='about' element={<About />} />
        </Routes>
    </>
  )
}

export default AllRoutes