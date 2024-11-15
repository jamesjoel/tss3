 import React from 'react'
 import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Api_Path } from '../../../constants/Api_Url'
import { useDispatch } from 'react-redux'
import { clearCart, removeItem } from '../../../../redux/CartSlice'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    let navigate=useNavigate();
let ShopButton=()=>{
    navigate('/Shop');
}
let dispatch=useDispatch();
    let removeItemToCart=(obj)=>{
       dispatch(removeItem(obj));
    }
    let removeAllItem=()=>{
        dispatch(clearCart());
    }
    let cartData =useSelector(state=>state.CartSlice)
    let[Price,setPrice]=useState(0);
    let[Discout,setDiscount]=useState(0);
    let totalPrice =0;
    let totalDiscount=0;
    
    // here me store map in variable so we write non printable logic in our map loop
    
    let CartItemLoop =cartData.map((item,index)=>{
        totalPrice +=item.price;
        totalDiscount +=((item.price*item.discount)/100);
            return(
           <>
           <tr>
               <td>{index+1}</td>
           <td className="cart_product_img">
               <a href="#"><img src={`(${Api_Path}/${item.image})`} alt="Product"/></a>
           </td>
           <td className="cart_product_desc">
               <h5>{item.title}</h5>
           </td>
           <td className="price">
               <span>&#8377;{item.price}</span>
           </td>
           {/* <td className="qty">
               <div className="qty-btn d-flex">
                   <p>Qty</p>
                   <div className="quantity">
                       <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>
                       <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                       <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
                   </div>
               </div>
           </td> */}
           <td>{item.discount}%</td>
           <td>&#8377;{item.price-(item.price * item.discount/100)}</td>
           <td><button className='btn btn-sm btn-dark' onClick={()=>removeItemToCart(item)}>Remove</button></td>
       </tr>
    
         </>
        )
               
        })
  return (
  <>
   {/* <div className="main-content-wrapper d-flex clearfix"> */}
   
{ 
cartData.length>0?
<>
   <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
          
                <div className="row">
                     <div className="col-12 col-lg-8">
                     <button className='btn btn-dark' onClick={removeAllItem}>Empty Cart</button>
                        <div className="cart-title mt-50">
                            <h2>Shopping Cart</h2>
                        </div>

                        <div className="cart-table clearfix">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>S.no</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        {/* <th>Quantity</th> */}
                                        <th>Discount</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                    CartItemLoop
                                  }
                                </tbody>
                               
                            </table>
                            <button className='btn  amado-btn ' onClick={ShopButton}>Continue Shopping</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="cart-summary">
                            <h5>Cart Total</h5>
                            <ul className="summary-table">
                                <li><span>subtotal:</span> <span>&#8377;{totalPrice}</span></li>
                                <li><span>discount:</span> <span>&#8377;{totalDiscount}</span></li>
                                <li><span>delivery:</span> <span>0</span></li>
                                <li><span>total:</span> <span>&#8377;{totalPrice-totalDiscount}</span></li>
                            </ul>
                            <div className="cart-btn mt-100">
                                {
                            (localStorage.getItem('user-access'))
                                ?
                                <NavLink to="/Checkout" className="btn amado-btn w-100">Checkout</NavLink>
                                :
                                <NavLink to="/Login" className="btn amado-btn w-100">Login</NavLink>
                                  }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
            :
            <>
            <h1 className="text-center mt-20" >Your Cart is Empty !</h1>&nbsp;
            <button className='btn  amado-btn ' onClick={ShopButton}>Continue Shopping</button>
            </>
}
            
         


            </>

  )
}

export default Cart