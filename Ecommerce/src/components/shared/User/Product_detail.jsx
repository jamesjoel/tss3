
import React, { useEffect, useState,useRef } from 'react'
import { NavLink, useNavigate,useParams } from 'react-router-dom'
import Api_Url, { Api_Path } from '../../../constants/Api_Url';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/CartSlice';

const Product_detail = () => {
    let dispatch =useDispatch();
    let addItemToCart=()=>{
    dispatch(addToCart(pro));
    // here this pro will go in the payload of action and product will go in cart
    navigate("/Cart");
    }
    let btn=useRef();
    let navigate=useNavigate();
    let handlebuy=()=>{
     if(localStorage.getItem("user-access"))
     {
        navigate(`/Checkout/${params.id}`);
     }
     else {
      btn.current.click();
     }
    }
    let handleclick=()=>{
        navigate("/Cart");
    }

     let[pro,setpro]=useState([]);
    
    let params=useParams();
   useEffect(()=>{
        console.log("Product detail component mounted");
        if(params.id)
        {    
            // here we hitted the parameterized routes of server
        axios.get(`${Api_Url}Product/${params.id}`)
        .then(response=>{
            console.log(response.data);
            setpro(response.data);
        })
       
        }
        else
        navigate("/Shop")
      
        },[])
   
  return (
   <>
        <div className="single-product-area section-padding-100 clearfix">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mt-50">
                                <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                <li className="breadcrumb-item">{pro.category}</li>
                                <li className="breadcrumb-item">{pro.subcategory}</li>
                                <li className="breadcrumb-item active" aria-current="page">{pro.title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="single_product_thumb">
                            <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li className="active" data-target="#product_details_slider" data-slide-to="0"style={{ backgroundImage: `url(${Api_Path}/${pro.image})` }}>
                                    </li>
                                    <li data-target="#product_details_slider" data-slide-to="1" style={{ backgroundImage: `url(${Api_Path}/${pro.image})` }}>
                                    </li>
                                    <li data-target="#product_details_slider" data-slide-to="2" style={{backgroundImage: `url(${Api_Path}/${pro.image})`}}>
                                    </li>
                                    <li data-target="#product_details_slider" data-slide-to="3" style={{backgroundImage: `url(${Api_Path}/${pro.image})`}}>
                                    </li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <a className="gallery_img" href={`(${Api_Path}/${pro.image})`}>
                                            <img className="d-block w-100" src={`(${Api_Path}/${pro.image})`} alt="First slide"/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a className="gallery_img" href={`(${Api_Path}/${pro.image})`}>
                                            <img className="d-block w-100" src={`(${Api_Path}/${pro.image})`}alt="Second slide"/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a className="gallery_img" href={`(${Api_Path}/${pro.image})`}>
                                            <img className="d-block w-100" src={`(${Api_Path}/${pro.image})`} alt="Third slide"/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a className="gallery_img" href={`(${Api_Path}/${pro.image})`}>
                                            <img className="d-block w-100" src={`(${Api_Path}/${pro.image})`} alt="Fourth slide"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="single_product_desc">
                            {/* <!-- Product Meta Data --> */}
                            <div className="product-meta-data">
                                <div className="line"></div>
                             
                                <h4 className="product-price">{pro.price-(pro.price*pro.discount/100)}&#8377;
                                    <span className='mx-2' style={{fontSize:'13px',textDecoration:"line-through"}}>{pro.price}&#8377;</span>
                                    <span style={{fontSize:'13px',color:"green"}}>{pro.discount}% off</span>
                                </h4>
                            
                                    <h4>{pro.title}</h4>
                               
                                {/* <!-- Ratings & Review --> */}
                                <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                    <div className="ratings">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="review">
                                        <a href="#">Write A Review</a>
                                    </div>
                                </div>
                                {/* <!-- Avaiable --> */}
                                <p className="avaibility"><i className="fa fa-circle"></i> In Stock</p>
                            </div>

                            <div className="short_overview my-5">
                                <p>{pro.detail}</p>
                            </div>

                            {/* <!-- Add to Cart Form --> */}
                            {/* <form className="cart clearfix" method="post"> */}
                                <div className="cart-btn d-flex mb-50">
                                    {/* <p>Qty</p> */}
                                    <div className="quantity">
                                        {/* <span className="qty-minus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                        <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                                        <span className="qty-plus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-caret-up" aria-hidden="true"></i></span> */}
                                    </div>
                                </div>
                                <button onClick={addItemToCart} type="submit" name="addtocart"  className="btn amado-btn float-right mx-2">Add to cart</button>
                                <button onClick={handlebuy} type="submit" name="buynow"  className="btn amado-btn float-right">Buy Now</button>
                            {/* </form> */}
                            
                           {/* now we get the contrl of this button  and we can use it to show mosal */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <button ref={btn}  data-bs-toggle="modal" className='btn btn-sm float-right' data-bs-target="#showmodal">OK</button>
         {/* <!-- Product Details Area End --> */}  
         <div className="modal" id="showmodal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                      <h4>Message</h4> 
                    </div>
                    <div className="modal-body">
                      <p>Please login to continue buy</p>  
                    </div>
                    <div className="modal-footer">
                        <a href="/login" className= "btn btn-sm btn-info" >Go to Login</a>
                        {/* here we used anchoe  tag to make a link to login with page refresh so modal overlay will be fade */}
                     </div>
                </div>
            </div>

        </div>
   </>
  )
}
export default Product_detail;




//     let handlebuy = () => {
//         if (localStorage.getItem("user-access")) {
//             navigate("/Checkout");
//         } else {
//             modalRef.current.show(); // show the modal
//         }
//     }

//    
//     }

//   useEffect(() => {
//         console.log("Product detail component mounted");
//         if (params.id) {
//             axios.get(`${Api_Url}Product/${params.id}`)
//                 .then(response => {
//                     console.log(response.data);
//                     setpro(response.data);
//                 })
//         } else {
//             navigate("/Shop")
//         }
//     }, [])

//     return (
//         <>
//             <!-- your code here -->

//             <button onClick={handlebuy} type="submit" name="buynow" className="btn btn-success float-right">Buy Now</button>

//             <div className="modal fade" id="showmodal" ref={modalRef}>
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h4>Message</h4>
//                         </div>
//                         <div className="modal-body">
//                             <p>Please login to continue buy</p>
//                         </div>
//                         <div className="modal-footer">
//                             <a href="/login" className="btn btn-sm btn-info">Go to Login</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Product_detail;
