import React from 'react'
import Home from '../components/feature/Home'
import About from '../components/feature/About'
import { Routes, Route } from 'react-router-dom'
import Help from '../components/feature/Help'
import Event2 from '../components/feature/Event2'
import Event3 from '../components/feature/Event3'
import Event4 from '../components/feature/Event4'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='help' element={<Help />} />
            <Route path='event2' element={<Event2 />} />
            <Route path='event3' element={<Event3 />} />
            <Route path='event4' element={<Event4 />} />
        </Routes>
    </>
  )
}

export default AllRoutes