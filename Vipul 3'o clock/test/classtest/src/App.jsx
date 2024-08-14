import React from 'react'
import Header from './components/shared/Header'
import AllRoutes from './components/routes/AllRoutes'
import Footer from './components/shared/Footer'



const App = () => {
  return (
    <>
      <Header />
      <div className="container" style={{ minHeight: "600px" }}>
        <AllRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App