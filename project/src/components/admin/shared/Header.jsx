import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            
            <NavLink className="navbar-brand" to="/admin">Administrator Panel</NavLink>

            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse justify-content-start" id="collapsibleNavbar">
                <ul className="navbar-nav" style={{ margin : "0px 30px 0px 30px"}}>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/category">Category</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/product">Product</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/orders">Orders</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/setting">Setting</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Header