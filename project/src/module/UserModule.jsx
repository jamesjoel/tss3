import React from 'react'
import Header from '../components/user/shared/Header'
import Slider from '../components/user/shared/Slider'
import Footer from '../components/user/shared/Footer'
import { Outlet } from 'react-router-dom'


const UserModule = () => {
  return (
    <>
        <Header />
        <Slider />
        <Outlet />
        <Footer />
    </>
  )
}

export default UserModule