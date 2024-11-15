import React from 'react'

import Allroutes from './Allroutes'
import { useDispatch } from 'react-redux'
import { IsLoggedIn } from '../redux/LoginUserSlice'


const App = () => {
  let  dispatch = useDispatch()
  dispatch(IsLoggedIn());
  // WE CAN USE THIS ALSO IN HEADER COMPONENT
  return (
    <>
    <Allroutes/>

    </>
    

  )
}

export default App
