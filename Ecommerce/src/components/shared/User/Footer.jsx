import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <footer className="footer_area clearfix">
        <div className="container-fluid">
            <div className="row align-items-center">
                {/* <!-- Single Widget Area --> */}
                <div className="col-12 col-lg-4">
                    <div className="single_widget_area">
                        {/* <!-- Logo --> */}
                        <div className="footer-logo mr-50">
                            <a href="index.html"><img src="/assets/img/core-img/logo2.png" alt=""/></a>
                        </div>
                        {/* <!-- Copywrite Text --> */}
                        <p className="copywrite"></p>
                          {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
{/* Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> & Re-distributed by <a href="https://themewagon.com/" target="_blank">Themewagon</a> */}
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </div>
                </div>
                {/* <!-- Single Widget Area --> */}
                <div className="col-12 col-lg-8">
                    <div className="single_widget_area">
                        {/* <!-- Footer Menu --> */}
                        <div className="footer_menu">
                            <nav className="navbar navbar-expand-lg justify-content-end">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                                <div className="collapse navbar-collapse" id="footerNavContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item-active">
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Shop">Shop</NavLink>
                                        </li>
                                           <li className="nav-item">
                                            <NavLink to="/Cart">Cart</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Login">My account</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer