import React from 'react'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import AllRoutes from './routes/AllRoutes'

const App = () => {
  return (
    <>
    <Header />
    <div className='container my-4' style={{minHeight : "700px"}}>

      <AllRoutes />
    </div>
    <Footer />
    </>
  )
}

export default App