import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api_Url from '../../../constants/Api_Url';
import *as YUP from 'yup'
import { useFormik } from 'formik';


const Checkout = () => {
    let[total,settotal]=useState({})
    let[Frmdata,setFrmdata]=useState({
        address:"",
        contact:"",
        payment_mode:""
    })
    let params=useParams();
    let[pro,setpro]=useState({});
  
  useEffect(()=>{
    if( params.id )
        axios.get(`${Api_Url}Product/${params.id}`)
    .then(response=>{
        setpro(response.data);
    
    })
 } ,[])
 if(pro)
    {
    settotal=pro.price-(pro.discount/100*pro.price)+60;
    }
    let[user,setuser]=useState({});
    useEffect(()=>{
        if(localStorage.getItem("user-access"))
        {
            axios.get(`${Api_Url}User/info`, {headers : { Authorization : localStorage.getItem('user-access')}})
            .then(response=>{
                setuser(response.data);
                // console.log(response.data);
                setFrmdata({...Frmdata,address:response.data.address,contact:response.data.contact,pincode:response.data.pincode})
        //    here we used destructing to show our editable data in form
            })
        }
    } ,[])
    let OrderSchema=YUP.object({
        address : YUP.string().required("Insert Address"),
        contact :YUP.number().min(1000000000,"contact should be in 10 character").max(9999999999,"Contact number should be in 10 character").typeError("Insert numbers only").required("Insert your contact")
        ,pincode:YUP.number().typeError("insert numbers").required("Insert your pincode")
})
    let Orderfrm=useFormik({
        enableReinitialize:true,
        validationSchema:OrderSchema,
        initialValues:Frmdata,
        onSubmit: (formdata) => {
            formdata.product_id=params.id;
            formdata.product_total=total;
            console.log(formdata);
        //     axios.post(`${Api_Url}Order/checkout`,formdata,{headers : { Authorization :localStorage.getItem("user-access")}})
        //    .then(response=>{
        //     console.log(response.data)
        //    })

        },
        
       })
     return (
    <>        
     <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="checkout_details_area mt-50 clearfix">

                            <div className="cart-title">
                                <h2>Checkout</h2>
                            </div>

                            <form onSubmit={Orderfrm.handleSubmit}>
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control" name="username"  placeholder="First Name"  disabled value={user.username}/>
                                    </div>
                                   
                              <div className="col-12 mb-3">
                                        <input type="email" className="form-control" name="email" disabled value={user.email} placeholder="Email" />
                                    </div>
                                     <div className="col-12 mb-3">
                                        <input type="text" className="form-control mb-3" value={Orderfrm.values.address} placeholder="Address" onChange={Orderfrm.handleChange}  name="address"/>
                                      {
                                  Orderfrm.errors.address && Orderfrm.touched.address ?
                                  <small> {Orderfrm.errors.address} </small>
                                    :
                                      ""
                                     }
                                    </div>
                                      <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control" name='pincode'  value={Orderfrm.values.pincode} placeholder="Pin Code" onChange={Orderfrm.handleChange}/>
                                        {
                                   Orderfrm.errors.pincode && Orderfrm.touched.pincode ?
                                   <small> {Orderfrm.errors.pincode} </small>
                                      :
                                       ""
                                      }
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="number" className="form-control" name="contact" min="0" value={Orderfrm.values.contact}placeholder="Phone No"onChange={Orderfrm.handleChange} />
                                        {
                               Orderfrm.errors.contact && Orderfrm.touched.contact ?
                                <small>{Orderfrm.errors.contact}</small>
                                    :
                                        ""
                                    }
                                    </div>
                                      <div className="col-12">
                                    <label>Select payment mode : </label>&nbsp;&nbsp;
                                      COD<input type="radio"  name="payment_mode" value="COD" className='mx-3'onChange={Orderfrm.handleChange}></input>
                                      UPI<input type="radio"name="payment_mode" value="UPI" className='mx-2'onChange={Orderfrm.handleChange}></input>
                                      
                                       </div>
                                       <div className="cart-btn mt-20 offset-9">
                                <button type="submit" className="btn amado-btn w-100 ">Checkout</button>
                            </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="cart-summary">
                            <h5>Cart Total</h5>
                            <ul className="summary-table">
                                <li><span>subtotal:</span> 
                                {
                            (pro)?
                                <span>{pro.price-(pro.discount/100*pro.price)}&#8377;</span>
                                 :
                             <span>{0.00}&#8377;</span>  
                            } 
                                </li>
                                <li><span>delivery:</span> 
                                {(pro)?
                                <span>{60}&#8377;</span>
                                :
                                <span>{0.00}&#8377;</span>
                                }
                                </li>
                                <li><span>total:</span> 
                               {
                                (pro)?
                                <span>{pro.price-(pro.discount/100*pro.price)+60}&#8377;</span>
                                :
                                <span>{0.00}&#8377;</span>
                               }
                       
                                </li>
                            </ul>
                             </div>
                    </div>
                </div>
            </div>
        </div>
  </>
  )
}

export default Checkout

