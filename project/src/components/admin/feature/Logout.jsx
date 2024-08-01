import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom'
const Logout = () => {

    useEffect(()=>{
        localStorage.removeItem("admin-access-token");
    }, [])

  return (
    <Navigate to="/" />
  )
}

export default Logout