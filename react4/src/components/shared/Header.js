import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {

  let name = "amar";

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#">Logo</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/test1">Test 1</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/test2">Test 2</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/test3">Test 3</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/test4">Test 4</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/test5">Test 5</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header