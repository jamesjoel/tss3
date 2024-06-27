import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './feature/Home.js'
import About from './feature/About.js'
import Contact from './feature/Contact.js'
import Header from './shared/Header'
import Footer from './shared/Footer.js'
import Test from './feature/Test.js'
import Test2 from './feature/Test2.js'
import Test3 from './feature/Test3.js'

const App = () => {
  return (
    <>
    <Header/>
    <div className="container" style={{minHeight:'600px',backgroundColor:'pink'}}>
        {/* here we are using inline css in which style tag syntax is changed a lil bit it became style={{attribute1,attribute2}} */}
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/contact' element ={<Contact/>}/>   
        <Route path='/test' element={<Test/>}/>
        <Route path='/test2' element={<Test2/>}/>
        <Route path='/test3' element={<Test3/>}/>
        </Routes>
  </div>
  <Footer/>
    </>
  )
}

export default App


