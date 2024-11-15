import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import Api_Url from '../../../constants/Api_Url'

const ProductList = () => {
  let [allPro, setAllPro]  = useState([])
  useEffect(()=>{
    window.scrollTo(0, 0);


  },[])
  let [pro,setPro]=useState([]);
  let askDelete=(item)=>{
    setPro(item)

  }
  let confDelete=()=>{
    axios.delete(`${Api_Url}Product/${pro._id}`)
   .then((response)=>{
     setAllPro(()=>{
       return allPro.filter(item=>item._id!=pro._id)
         })})
  }


  useEffect(()=>{
    axios.get(Api_Url+"Product")
    .then(response=>{
      setAllPro(response.data)
    })
  },[])

  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <NavLink to="/Admin/Product/Add" className="btn btn-dark btn-sm">Add New Product</NavLink>
         {
          allPro.length>0
          ?
          <table className="table table-dark table-bordered my-4">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Product Title</th>
                          <th>Product Price</th>
                          <th>Product Category</th>
                          <th>Product Sub-Category</th>
                          
                          <th>Edit</th>
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
                              <td><i className="fa-solid fa-pen-to-square text-warning"></i></td>
                              <td><button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#delmodal"onClick={()=>askDelete(item)}><i className="fa-solid fa-trash text-light"></i></button></td>
                          </tr>)
                        }
                      </tbody>
                    </table>
                    :
                    <div className='alert alert-danger'>
                      No Product present
                    </div>
         }
          
        </div>
      </div>
    </div>
    <div className="modal fade" id="delmodal">
       <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Delete Product</h2>
          </div>
          <div className="modal-body">
       <h4>Are you sure you want to delete {pro.name} ?</h4>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button className="btn btn-danger"  onClick={confDelete} data-bs-dismiss="modal">Delete</button>
          </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default ProductList