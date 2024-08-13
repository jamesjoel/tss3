import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
        <a href='/'>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='/about'>About</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='/contact'>Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='/contact/info'>Contact-info</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='/contact/help'>Help</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />


            <Route path='contact' element={<RedBar />} >
            {/* :3000/contact */}
                <Route path='' element={<Contact />} />
                {/* /contact */}
                <Route path='info' element={<ContactInfo />} />
                {/* /contact/info */}
                <Route path='help' element={<ContactHelp />} />
                {/* /contact/help */}
            </Route>


        </Routes>
    </>
  )
}

const RedBar = ()=>{
    return(
        <>
        <div style={{backgroundColor : "red", height : "20px", width : "100%"}}></div>
        <Outlet />
        </>
    )
}


const Home = ()=>{
    return(
        <h1>Home Page</h1>
    )
}
const About = ()=>{
    return(
        <h1>About Page</h1>
    )
}
const Contact = ()=>{
    return(
        <>
        
        <h1>Contact Page</h1>
        </>
    )
}
const ContactInfo = ()=>{
    return(
        <h1>Contact Info Page</h1>
    )
}
const ContactHelp = ()=>{
    return(
        <h1>Contact Help Page</h1>
    )
}




export default App