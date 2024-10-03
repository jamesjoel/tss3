import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
  localStorage.removeItem("user-access")
  localStorage.removeItem("name")
  return (
    <Navigate to="/login"/>
  )
}

export default Logout