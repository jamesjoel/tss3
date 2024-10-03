import React from 'react'
import { Navigate } from 'react-router-dom'
const AdminLogout = () => {
    localStorage.removeItem("access-token");
  return (
   <Navigate to="/"></Navigate>
  )
}

export default AdminLogout