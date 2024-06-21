import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/feature/Home'
import About from './components/feature/About'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import './App.css';
import Contact from './components/feature/Contact'
import Test1 from './components/feature/Test1'
import Test2 from './components/feature/Test2'
import Test3 from './components/feature/Test3'

const App = () => {

  let style = { minHeight : "600px" }

  return (
    <>
    <Header />
    <div className="" style={style}>
      <Routes>
        <Route path='' element={ <Home/> } />
        <Route path='about' element={ <About/> } />
        <Route path='contact' element={ <Contact/> } />
        <Route path='test1' element={ <Test1/> } />
        <Route path='test2' element={ <Test2/> } />
        <Route path='test3' element={ <Test3/> } />
      </Routes>
      
    </div>
    <Footer />
    </>
  )
}

export default App