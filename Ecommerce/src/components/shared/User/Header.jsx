import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CartSlice from '../../../../redux/CartSlice'
import LoginUserSlice from '../../../../redux/LoginUserSlice'




const Header = () => {
    let cartData=useSelector(state=>state.CartSlice);
    let checkLogin=useSelector(state=>state.LoginUserSlice)

  return (
    <>
    {/* <!-- Mobile Nav (max width 767px)--> */}
     <div className="mobile-nav">
         {/* <!-- Navbar Brand --> */}
         <div className="amado-navbar-brand">
             <a href="index.html"><img src="/assets/img/core-img/logo.png" alt=""/></a>
         </div>
         {/* <!-- Navbar Toggler --> */}
         <button  className="amado-navbar-toggler">
             <span></span><span></span><span></span>
         </button>
     </div>
     

     {/* <!-- Header Area Start --> */}
     <header className="header-area clearfix">
         {/* <!-- Close Icon --> */}
         <div className="nav-close">
             <i className="fa fa-close" aria-hidden="true"></i>
         </div>
         {/* <!-- Logo --> */}
         
         {/* <!-- Amado Nav --> */}
         <nav className="amado-nav">
             <ul>
                 <li><NavLink className="text-center" to="/">Home</NavLink></li>
                 <li ><NavLink className="text-center" to ="/Shop">Shop</NavLink></li>
                 {/* <li><NavLink to="product-details.html">Product</NavLink></li> */}
                 <li><NavLink className="text-center" to="/Cart">Cart</NavLink></li>
                 {
                    checkLogin==true
                    ?
                    <li className='"nav-item dropdown'>
                        <NavLink className="nav-link fw-bolder bg-light dropdown-toggle text-center"  data-bs-toggle="dropdown" to="">{localStorage.getItem("name")}</NavLink>
                        <div className='dropdown-menu' >
                            <NavLink className="dropdown-item text-center" to="/myaccount" >My-Account</NavLink>
                            <NavLink className="dropdown-item text-center" to="/Profile" >Profile</NavLink>
                            <NavLink className="dropdown-item text-center" to="/logout" >Logout</NavLink>
                        </div>
                        </li>
                    :
                    <>
                     <li><NavLink className="text-center" to="/Login">My Account</NavLink></li>
                     <li><NavLink className="text-center" to="/SignUp">SIGNup</NavLink></li>
                      <li><NavLink className="text-center" to="/Admin">Admin-Login</NavLink></li>
                     </>
                 }
             </ul>
         </nav>
         {/* <!-- Button Group --> */}

         <div className="amado-btn-group mt-30 mb-100">
             <a href="#" className="btn amado-btn mb-15">%Discount%</a>
             <a href="#" className="btn amado-btn active">New this week</a>
         </div>
         {/* <!-- Cart Menu --> */}
         <div className="cart-fav-search mb-100">
             <NavLink to="/cart" className="cart-nav"><img src="/assets/img/core-img/cart.png" alt=""/> Cart <span>({cartData.length})</span></NavLink>
             {/* <Navlink to ="/Favourite" className="fav-nav"><img src="/assets/img/core-img/favorites.png" alt=""/> Favourite</Navlink>
             <Navlink to="" className="search-nav"><img src="/assets/img/core-img/search.png" alt=""/> Search</Navlink> */}
         </div>
         {/* <!-- Social Button --> */}
         {/* <div className="social-info d-flex justify-content-between">
             <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
         </div> */}
     </header>
     {/* </div> */}
     </>


  )
}

export default Header