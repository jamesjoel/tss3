import React from 'react'
import Home from '../components/feature/Home'
import About from '../components/feature/About'
import { Routes, Route } from 'react-router-dom'
import Help from '../components/feature/Help'
import Event2 from '../components/feature/Event2'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='help' element={<Help />} />
            <Route path='event2' element={<Event2 />} />
        </Routes>
    </>
  )
}

export default AllRoutes