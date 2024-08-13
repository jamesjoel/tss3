import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL';


const Header = () => {

  let [cateArr, setCateArr] = useState([]);

  useEffect(()=>{
    axios.get(API_URL+"/category").then(response=>{
      setCateArr(response.data);
    })
  },[])

  return (
    <>
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              
              <div className="site-logo">
                <NavLink to="/">
                  <img src="/public/assets/img/logo.png" alt=""/>
                </NavLink>
              </div>
              

              
              <nav className="main-menu">
                <ul>
                  <li className="">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/cart">My Cart</NavLink>
                  </li>
                  
                  <li className="">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li><a href="#">Category</a>
                    <ul className="sub-menu">
                      {
                        cateArr.map(item=><li key={item._id}><a href="404.html">{item.name}</a></li>)
                      }
                      
                      
                    </ul>
                  </li>
                  {
                    localStorage.getItem("access-token") 
                    ?
                    <>
                      <li className="">
                       <NavLink style={{backgroundColor : "#000"}} to="/my-account">{localStorage.getItem("name")}</NavLink>
                       <ul className="sub-menu">
                          <li><NavLink to="/my-account">My Account</NavLink></li>
                          <li><NavLink to="/logout">Logout</NavLink></li>
                      
                      </ul>
                  </li>
                  
                    </>
                    :
                    <>
                    <li className="">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/signup">Signup</NavLink>
                  </li>
                    </>

                  }
                  


                  
                  {/* <li><a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li><a href="404.html">404 page</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="cart.html">Cart</a></li>
                      <li><a href="checkout.html">Check Out</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><a href="news.html">News</a></li>
                      <li><a href="shop.html">Shop</a></li>
                    </ul>
                  </li> */}
                  
                  <li>
                    <div className="header-icons">
                      <NavLink className="shopping-cart" to="/cart"><i className="fas fa-shopping-cart"></i></NavLink>
                      
                    </div>
                  </li>
                </ul>
              </nav>
              <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
              <div className="mobile-menu"></div>
              
            </div>
          </div>
        </div>
      </div>
	</div>
    </>
  )
}

export default Header