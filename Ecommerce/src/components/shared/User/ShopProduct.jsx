import React from 'react'
import axios from 'axios'
import { useState} from 'react-router-dom';

const ShopProduct = () => {

    let[Product,setProduct]=useState([]);
    let Handleclick =()=>
    {
        axios.get("").then((response)=>{
            console.log(response.data)
            setArr(response.data);


        })
    }

    



  return (

<>
    <div className="amado_product_area section-padding-100">
        <div className="container-fluid">

            <div className="row">
                <div className="col-12">
                    <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                        {/* <!-- Total Products --> */}
                        <div className="total-products">
                            <p>Showing 1-8 0f 25</p>
                            <div className="view d-flex">
                                <a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        {/* <!-- Sorting --> */}
                        <div className="product-sorting d-flex">
                            <div className="sort-by-date d-flex align-items-center mr-15">
                                <p>Sort by</p>
                                <form action="#" method="get">
                                    <select name="select" id="sortBydate">
                                        <option value="value">Date</option>
                                        <option value="value">Newest</option>
                                        <option value="value">Popular</option>
                                    </select>
                                </form>
                            </div>
                            <div className="view-product d-flex align-items-center">
                                <p>View</p>
                                <form action="#" method="get">
                                    <select name="select" id="viewProduct">
                                        <option value="value">12</option>
                                        <option value="value">24</option>
                                        <option value="value">48</option>
                                        <option value="value">96</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                    <div className="single-product-wrapper">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="/assets/img/product-img/product1.jpg" alt=""/>
                            {/* <!-- Hover Thumb --> */}
                            <img className="hover-img" src="/assets/img/product-img/product2.jpg" alt=""/>
                        </div>

                        {/* <!-- Product Description --> */}
                        <div className="product-description d-flex align-items-center justify-content-between">
                            {/* <!-- Product Meta Data --> */}
                            <div className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">$180</p>
                                <a href="product-details.html">
                                    <h6>Modern Chair</h6>
                                </a>
                            </div>
                            {/* <!-- Ratings & Cart --> */}
                            <div className="ratings-cart text-right">
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div className="cart">
                                    <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="/assets/img/core-img/cart.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                    <div className="single-product-wrapper">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="/assets/img/product-img/product2.jpg" alt=""/>
                            {/* <!-- Hover Thumb --> */}
                            <img className="hover-img" src="/assets/img/product-img/product3.jpg" alt=""/>
                        </div>

                        {/* <!-- Product Description --> */}
                        <div className="product-description d-flex align-items-center justify-content-between">
                            {/* <!-- Product Meta Data --> */}
                            <div className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">$180</p>
                                <a href="product-details.html">
                                    <h6>Modern Chair</h6>
                                </a>
                            </div>
                            {/* <!-- Ratings & Cart --> */}
                            <div className="ratings-cart text-right">
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div className="cart">
                                    <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="/assets/img/core-img/cart.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                    <div className="single-product-wrapper">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="/assets/img/product-img/product3.jpg" alt=""/>
                            {/* <!-- Hover Thumb --> */}
                            <img className="hover-img" src="/assets/img/product-img/product4.jpg" alt=""/>
                        </div>

                        {/* <!-- Product Description --> */}
                        <div className="product-description d-flex align-items-center justify-content-between">
                            {/* <!-- Product Meta Data --> */}
                            <div className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">$180</p>
                                <a href="product-details.html">
                                    <h6>Modern Chair</h6>
                                </a>
                            </div>
                            {/* <!-- Ratings & Cart --> */}
                            <div className="ratings-cart text-right">
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div className="cart">
                                    <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="/assets/img/core-img/cart.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                    <div className="single-product-wrapper">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="/assets/img/product-img/product4.jpg" alt=""/>
                            {/* <!-- Hover Thumb --> */}
                            <img className="hover-img" src="img/product-img/product5.jpg" alt=""/>
                        </div>

                        {/* <!-- Product Description --> */}
                        <div className="product-description d-flex align-items-center justify-content-between">
                            {/* <!-- Product Meta Data --> */}
                            <div className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">$180</p>
                                <a href="product-details.html">
                                    <h6>Modern Chair</h6>
                                </a>
                            </div>
                            {/* <!-- Ratings & Cart --> */}
                            {/* <div className="ratings-cart text-right"> */}
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div className="cart">
                                    <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="/assets/img/core-img/cart.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                

                {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                    <div className="single-product-wrapper">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="/assets/img/product-img/product5.jpg" alt=""/>
                            {/* <!-- Hover Thumb --> */}
                            <img className="hover-img" src="/assets/img/product-img/product6.jpg" alt=""/>
                        </div>

                        {/* <!-- Product Description --> */}
                        <div className="product-description d-flex align-items-center justify-content-between">
                            {/* <!-- Product Meta Data --> */}
                            <div className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">$180</p>
                                <a href="product-details.html">
                                    <h6>Modern Chair</h6>
                                </a>
                            </div>
                            {/* <!-- Ratings & Cart --> */}
                            <div className="ratings-cart text-right">
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div className="cart">
                                    <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="/assets/img/core-img/cart.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                    <div className="single-product-wrapper">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="/assets/img/product-img/product6.jpg" alt=""/>
                            {/* <!-- Hover Thumb --> */}
                            <img className="hover-img" src="/assets/img/product-img/product1.jpg" alt=""/>
                        </div>

                        {/* <!-- Product Description --> */}
                        <div className="product-description d-flex align-items-center justify-content-between">
                            {/* <!-- Product Meta Data --> */}
                            <div className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">$180</p>
                                <a href="product-details.html">
                                    <h6>Modern Chair</h6>
                                </a>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
</div>
           
        
        
                </div>
        
        
  </>          
  )
}

export default ShopProduct