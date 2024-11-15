import React from 'react'
import { Navigate } from 'react-router-dom'
import { LogoutInAction } from '../../../../redux/LoginUserSlice'
import { useDispatch } from 'react-redux'

const Logout = () => {
  let   dispatch = useDispatch()
  localStorage.removeItem("user-access")
  localStorage.removeItem("name")
  dispatch(LogoutInAction());
  return (
    <Navigate to="/login"/>
  )
}

export default Logout