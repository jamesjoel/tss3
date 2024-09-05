import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/components/shared/Admin/Header'
import Footer from '../src/components/shared/Admin/Footer'

const AdminModule = () => {
  return (
 <>
 <Header/>
 <div className='Container' style={{minHeight:"700px"}}>
 <Outlet/>
 </div>
 {/* now height of each page would be 700 px */}
 <Footer/>
 </>
)
}
export default AdminModule


