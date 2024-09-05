import React from 'react'

import Header from '../src/components/shared/User/Header'
import Footer from '../src/components/shared/User/Footer'
import News from '../src/components/shared/User/News'
import { Outlet } from 'react-router-dom'

const UserModule = () => {
  return (
    <>
    <div className="main-content-wrapper d-flex clearfix">
  <Header/>
  <Outlet/>
  <News/>
  <Footer/>
      </div> 

    
    </>
  )
}

export default UserModule