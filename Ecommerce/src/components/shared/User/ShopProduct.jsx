import React, { useEffect } from 'react'
import axios from 'axios'
import { useState} from 'react';
import Api_Url from '../../../constants/Api_Url';

const ShopProduct = () => {

    let [Product,setProduct]=useState([]);
    useEffect(()=>{ 
        axios.get(Api_Url+"Product")
        .then((response)=>{
            console.log(response.data);
            setProduct(response.data);


        })

    },[])
   
  return (
  <>
    <div className="amado_product_area section-padding-100">
        <div className="container">
          <div className='row'>
                    {
                        Product.map((item)=>{ <ProductBox info={item}/>})
                    }
                </div>
              </div>
              </div>
     </> 
 )

}
const ProductBox = ({info}) => {
    return (
      <>
      <div className="col-12 col-md-4 col-lg-3 mb-5">
                          <a className="product-item" href="#">
                              
                              <img style={{height : "250px"}} src={`http://localhost:3001/assets/images/${info.image}`} className="img-fluid product-thumbnail" />
                              <h3 className="product-title">{info.title}</h3>
                              <small>{info.category}</small>
                              <br />
                              <strong className="product-price">${info.price}</strong>
  
                              {/* <span className="icon-cross">
                                  <img src="/public/assets/images/cross.svg" className="img-fluid"/>
                              </span> */}
                          </a>
                      </div> 
      </>

    )
}

export default ShopProduct