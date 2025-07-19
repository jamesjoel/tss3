import React from 'react'
import { NavLink } from 'react-router-dom'
import { Api_Path } from '../../../constants/Api_Url'


const ProductBox = ({info}) => {
    // console.log('info:', info);
    return (
       <>
         <div className="col-12 col-sm-6 col-md-12 col-xl-6">
         <NavLink to={`Product/Detail/${info._id}`}>
                         <div className="single-product-wrapper col-12">
                             {/* <!-- Product Image --> */}
                             <div className="product-img">
                                 <img src={`${Api_Path}/${info.image}`} alt=""/>
                                 {/* <!-- Hover Thumb --> */}
                                 {/* <img className="hover-img" src={`${Api_Path}/${info.image}`}  alt="Something Went Wrong"/> */}
                             </div> 
 
                             {/* <!-- Product Description --> */}
                             <div className="product-description d-flex align-items-center justify-content-between">
                                 {/* <!-- Product Meta Data --> */}
                                 <div className="product-meta-data">
        
                                     <h4 className="product-price">&#8377;{info.price-(info.price*info.discount/100)}</h4>
                                     <span className='mx-2' style={{fontSize:'13px',textDecoration:"line-through"}}>&#8377;{info.price}</span>
                                     <span style={{fontSize:'13px',color:"green"}}>{info.discount}% off</span>
                                    
                             
         <h6 className='mt-2'>{info.title}</h6>
                                         
                                
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
                                         <NavLink to="Cart" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="img/core-img/cart.png" alt=""/></NavLink>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         </NavLink>
                     </div>
        </>
 
     )
  } 
  export default ProductBox