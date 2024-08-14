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
  let [product, setProduct] = useState({});
  useEffect(()=>{
    axios.get(API_URL+"/product").then(response=>{
      setAllPro(response.data);
    })
  },[])

  let askDelete = (a)=>{
    setProduct(a);
  }

  let confDelete = ()=>{
    axios.delete(API_URL+"/product/"+product._id).then(response=>{
      setAllPro(()=>{
        return allPro.filter(item => item._id != product._id);
      })
      
    })
  }

  return (
    <>
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
                <th>Delete</th>
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
                    <td><button onClick={()=>askDelete(item)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id='delModal' className='modal fade'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4>Delete Product</h4>
          </div>
          <div className='modal-body'>
            <p>Are you sure want to delete this <b>{product.title}</b></p>
          </div>
          <div className='modal-footer'>
            <button className='btn btn-dark' data-dismiss="modal">Close</button>
            <button className='btn btn-danger' data-dismiss="modal" onClick={confDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Product