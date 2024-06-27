import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" href="#">Navbar w/ text</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="/contact">Contact</NavLink>
      </li>
    </ul>
    <span className="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>

    </>
  )
}

export default Header