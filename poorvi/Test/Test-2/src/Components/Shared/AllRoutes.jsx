import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from '../Features/Home'
import Student from '../Features/Student'
import AddStudent from '../Features/AddStudent'

const AllRoutes = () => {
  return (
   <>
   <Routes>
<Route path="" element={<Home/>}/>
<Route path="Student" element={<Student/>}/>
<Route path='/Add/Student' element={<AddStudent/>}/>
   </Routes>
   
   </>
  )
}

export default AllRoutes