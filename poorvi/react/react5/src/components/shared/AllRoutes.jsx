import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../feature/Home'
import Contact from '../feature/Contact'
import Header from './Header'
import Footer from './Footer'
const AllRoutes = () => {
  return (
    <>
    <Header/>
    <div className='container' style={ {height : "600px"}}></div>
<Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
   
</Routes>
<Footer/>
    
  </>
  )
}

export default AllRoutes