import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
<>
<div className="main-content-wrapper d-flex clearfix">
{/* <Header/> */}
<div className="products-catagories-area clearfix">
            <div className="amado-pro-catagory clearfix" style={{position: relative, height: "6577.23px"}}>

                {/* <!-- Single Catagory --> */}
                <div className="single-products-catagory clearfix" style={{position: absolute, left: "0%" ,top: "0px"}}>
                    <NavLink to="Shop.jsx">
                        <img src="public/assets/img/bg-img/1.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </NavLink>
                </div>

                {/* <!-- Single Catagory --> */}
                <div className="single-products-catagory clearfix" style={{position: absolute, left: "0%", top: "684px"}}>
                    <NavLink to="Shop.jsx">
                        <img src="public/assets/img/bg-img/2.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $180</p>
                            <h4>Minimalistic Plant Pot</h4>
                        </div>
                    </NavLink>
                </div>

                {/* <!-- Single Catagory --> */}
                <div className="single-products-catagory clearfix" style={{position: absolute ,left: "0%" ,top: "1657px"}}>
                    <NavLink to="Shop.jsx">
                        <img src="public/assets/img/bg-img/3.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </NavLink>
                </div>

                {/* <!-- Single Catagory --> */}
                <div className="single-products-catagory clearfix" style={{position: absolute, left: "0%", top: "2266px"}}>
                    <NavLink to="Shop.jsx">
                        <img src="public/assets/img/bg-img/4.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $180</p>
                            <h4>Night Stand</h4>
                        </div>
                    </NavLink>
                </div>

                {/* <!-- Single Catagory --> */}
                <div className="single-products-catagory clearfix" style={{position: absolute, left: "0%",top: "2875px"}}>
                    <NavLink to="Shop.jsx">
                        <img src="public/assets/img/bg-img/5.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $18</p>
                            <h4>Plant Pot</h4>
                        </div>
                    </NavLink>
                </div>

                {/* <!-- Single Catagory --> */}
                <div className="single-products-catagory clearfix" style={{position: absolute, left: "0%", top: "3560px"}}>
                    <NavLink to="Shop.jsx">
                        <img src="public/assets/img/bg-img/6.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $320</p>
                            <h4>Small Table</h4>
                        </div>
                    </NavLink>
                </div>

                {/* <!-- Single Catagory --> */}
                <div className="single-products-catagory clearfix" style={{position: absolute,left: "0%", top: "4170px"}}>
                    <NavLink to="Shop.jsx">
                        <img src="public/assets/img/bg-img/7.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $318</p>
                            <h4>Metallic Chair</h4>
                        </div>
                    </NavLink>
                </div>

                {/* <!-- Single Catagory --> */}
                <div className="single-products-catagory clearfix" style={{position: absolute,left: "0%", top: "5143px"}}>
                    <NavLink to="Shop.jsx">
                        <img src="public/assets/img/bg-img/8.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $318</p>
                            <h4>Modern Rocking Chair</h4>
                        </div>
                    </NavLink>
                </div>

                {/* <!-- Single Catagory --> */}
                <div className="single-products-catagory clearfix" style={{position: absolute, left: "0%",top: "5966px"}}>
                    <NavLink to="Shop.jsx">
                        <img src="public/assets/img/bg-img/9.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $318</p>
                            <h4>Home Deco</h4>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
        {/* <News/> */}
        {/* <Footer/> */}
        </div>
</>
  )
}

export default Home