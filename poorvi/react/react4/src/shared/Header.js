import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <>
        <h1>this is header</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      {/* <NavLink className="nav-item nav-link active" to="#">Home <span className="sr-only">(current)</span></NavLink> */}
      <NavLink className="nav-item nav-link" to="/">Home</NavLink>
      <NavLink className="nav-item nav-link" to="/about">About</NavLink>
      <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
      <NavLink className="nav-item nav-link" to="/test">Test</NavLink>
      <NavLink className="nav-item nav-link" to="/test2">Test2</NavLink>
      <NavLink className="nav-item nav-link" to="/test3">Test3</NavLink>                                                                                                                            
 </div>
  </div>
</nav>

</>    )
}

export default Header