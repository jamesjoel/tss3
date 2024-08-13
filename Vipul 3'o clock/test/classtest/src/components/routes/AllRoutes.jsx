import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Student from '../features/Student'
import Home from '../features/Home'
import AddStudent from '../shared/AddStudent'


const AllRoutes = () => {
    return (
        <Routes >
            <Route path='' element={<Home />} />
            <Route path='student' element={<Student />} />
            <Route path='add/student' element={<AddStudent />} />
        </Routes>
    )
}

export default AllRoutes