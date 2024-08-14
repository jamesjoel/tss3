import React from 'react'
import Header from './Components/Shared/Header'
import AllRoutes from './Components/Shared/AllRoutes'
import Footer from './Components/Shared/Footer'

const App = () => {
  return (
  <>
  <Header/>
  <div className='container' style={{minHeight:"600px"}}>
    <AllRoutes/>
  </div>
  <Footer/>
  </>
  )
}

export default App
