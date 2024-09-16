import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
<nav className="navbar navbar-dark bg-dark">
<nav className="navbar navbar-expand navbar-light bg-light ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <NavLink className="navbar-brand text-dark" to="/Admin">Administrator Panel</NavLink>
   <div className="collapse navbar-collapse justify-content-start" id="navbarTogglerDemo03">
    <ul className="navbar-nav" style={{margin:"0px 30px 0px 30px"}}>
      <li className="nav-item ">
        <NavLink  to="/Admin/Login"> Login &nbsp;&nbsp; </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink to="/Admin/Dashboard">Dashboard &nbsp;&nbsp;</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink to="/Admin/Product">Product &nbsp;&nbsp;</NavLink>
      </li>
      {/* <li className="nav-item ">
        <NavLink to="/Admin/Product/Add">Product &nbsp;&nbsp;</NavLink>
      </li> */}
      <li className="nav-item ">
        <NavLink to="/Admin/Category">Category &nbsp;&nbsp;</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink to="/Admin/SubCategory">SubCategory &nbsp;&nbsp;</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink to="/Admin/User">User</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</nav>


    </>
  )
}

export default Header