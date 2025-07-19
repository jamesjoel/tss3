import React, { useEffect } from 'react'
import axios from 'axios'
import { useState} from 'react';
import Api_Url from '../../../constants/Api_Url';
import ProductBox from './ProductBox';

const ShopProduct = () => {

     let [Product,setProduct]=useState([]);
    //  let[totalrec,setTotalrec]=useState(0);
     let [totalPages,setTotalPages]=useState(0);
     let recPerPage=2;
    //  useEffect(()=>{
    //     axios.get(`${Api_Url}Product/totalrec`).
    //     then((response)=>{
    //       if (response.data) {
    //          setTotalPages(Math.ceil(response.data.total/recPerPage));
    //          console.log(response.data); 
    //         }
    //       else
    //       {
    //     " No Data Found"
    //       }
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching data:", error);
    //     });
    //      },[])
    useEffect(()=>{ 
       
 axios.get(`${Api_Url}Product/pagination/${recPerPage}`)
// axios.get(`${Api_Url}Product`)
 .then((response)=>{
            console.log(response.data);
           setProduct(response.data);
               })
             },[])
     
   
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
                {/* <!-- Single Product Area --> */}
                <div className='row'>
              
                {
                        Product.map((item,index)=>< ProductBox key={index} info={item}/>)
                }
                </div>
               
              
                </div>
                </div>
     </> 
 )

}


export default ShopProduct
