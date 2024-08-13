import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    
    useEffect(()=>{
        localStorage.removeItem("access-token");
    },[])

    

  return (
    <Navigate to="/login" />
    // similer to useNavigate hook
  )
}

export default Logout