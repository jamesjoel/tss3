import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import {API_URL} from '../../../util/API_URL'

const Product = () => {
  let navigate = useNavigate();

  useEffect(()=>{

    if(! localStorage.getItem("admin-access-token"))
    {
      navigate("/admin");
    }

  },[])
  let [allPro, setAllPro] = useState([]);
  useEffect(()=>{
    axios.get(API_URL+"/product").then(response=>{
      setAllPro(response.data);
    })
  },[])

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <NavLink to='/admin/product/add' className='btn btn-primary'>Add New Product</NavLink>
          <table className="table table-dark mt-4">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Sub-Category</th>
                <th>Discount</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {
                allPro.map((item, index)=><tr key={item._id}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.subcategory}</td>
                    <td>{item.discount}</td>
                    <td>{item.quantity}</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Product