import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home'
import Teacher from '../components/feature/Teacher'
import AddTeacher from '../components/feature/AddTeacher'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='teacher' element={<Teacher />} />
        <Route path='teacher/add' element={<AddTeacher />} />
    </Routes>
  )
}

export default AllRoutes