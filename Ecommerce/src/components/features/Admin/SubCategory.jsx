import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect } from 'react'
import Api_Url from '../../../constants/Api_Url'
const SubCategory = () => {

  let [SubCategory ,SetSubCategory]=useState([]);
  let[selectSubcate,setSelectSubcate]=useState({});
 useEffect(()=>{
  axios.get(Api_Url+"SubCategory")
  .then((response)=>{
    SetSubCategory(response.data);
  })
  .catch((error) => {
    console.error(error);
    // Handle error here
  })
  },[])
  let askDelete=(item)=>{
  setSelectSubcate(item);
  // console.log(item);
 
  }

  let confDelete=()=>{
 axios.delete(`${Api_Url}SubCategory/${selectSubcate._id}`)
   .then((response)=>{
     SetSubCategory(()=>{
       return SubCategory.filter(item=>item._id!=selectSubcate._id)
         })})
  }
  return (
    <>
    <div className='Container'>
      <div className='row'>
        <div className='col-md-8 offset-2 my-6'>
          <h4>SubCategories</h4>
         <NavLink to= "/Admin/SubCategory/Add" className='btn btn-primary'>Add Sub Category</NavLink>
        {
          SubCategory.length>0
          ?
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Category</th>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
             {
              SubCategory.map((item,index)=>
               <tr key={index}>
                <td>{index+1}</td>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td><NavLink to={`/Admin/SubCategory/edit/${item._id}`} className="btn btn-info"><i className="fa-solid fa-pen"></i></NavLink></td>
                <td ><button className='btn btn-danger' onClick={()=>askDelete(item)} data-bs-toggle="modal" data-bs-target="#delmodal"><i className="fa-solid fa-trash"></i></button></td>
               </tr>
              )}
            

            </tbody>
          </table>
          :
          <div className='alert alert-danger'>
            No SubCategory is Present
          </div>
        }
        </div>
      </div>
    </div>

    <div className="modal fade" id="delmodal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
           <h2>Subcategory Delete</h2>
          </div>
          <div className="modal-body">
          <h4>Are you sure you want to Delete {selectSubcate.name}??</h4>
          </div>
          <div className="modal-footer">
            <button className='btn btn-danger' data-bs-dismiss="modal" onClick={confDelete}>Delete</button>
            <button className='btn btn-dark' data-bs-dismiss="modal" >Close</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )

   }
  
   

export default SubCategory