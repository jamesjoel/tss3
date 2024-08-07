import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">My-Project</NavLink>
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
          <NavLink className="nav-link" to="/help">Help</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event2">Event2</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event3">Event3</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event4">Event4</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header