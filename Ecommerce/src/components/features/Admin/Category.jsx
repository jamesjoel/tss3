import React from 'react'
import {NavLink,useParams} from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import Api_Url from '../../../constants/Api_Url'
const Category = () => {
 
let [Category ,SetCategory]=useState([]);
let [selectedCate,setselectedCate]=useState({});
 useEffect(()=>{
  axios.get(Api_Url+"Category").then((response)=>{
    SetCategory(response.data);
  })
  },[])
  let askDelete=(item)=>{
    setselectedCate(item);
  }
  let confDelete=()=>{
    axios.delete(`${Api_Url}Category/${selectedCate._id}`)
    .then((response)=>{
     SetCategory(()=>{
      return Category.filter(item=>item._id !=selectedCate._id)
     })
    })
  }
  let params =useParams();
  useEffect(()=>{
   
   if( params && params.a)
   {
    let id=params.a;
    console.log(id);
   }
    // This a word is similar to api id variable name since we gave a in our route so using a here also
  },[]);


  return (
    <>
    <div className='Container'>
      <div className='row'>
        <div className='col-md-8 offset-2 my-6'>
          <h4>Categories</h4>
         <NavLink to= "/Admin/Category/Add" className='btn btn-primary'>Add Category</NavLink>
         {
          Category.length>0
          ?
          <table className='table table-dark'>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           {
            Category.map((item,index)=>
             <tr key={index}>
              <td>{index+1}</td>
              <td>{item.category}</td>
              <td>
                <NavLink to={`/Admin/Category/edit/${item._id}`}  className='btn btn-info '><i className="fa-solid fa-pen"></i></NavLink>
                </td>
              <td >
                <button className='btn btn-danger' onClick={()=>askDelete(item)} data-bs-toggle='modal' data-bs-target="#delModal"><i className="fa-solid fa-trash"></i></button></td>
             </tr>
            )}
          

          </tbody>
        </table>
        :
        <div className='alert alert-danger'>
          No Category is Present
        </div>
         }
        </div>
      </div>
    </div>
    
      <div id="delModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Delete Category</h4>
            </div>
            <div className="modal-body">
              <p>Are you Sure You want to delete  {selectedCate.category}??</p>

            </div>
            <div className="modal-footer">
              <button data-bs-dismiss="modal" className='btn btn-dark btn-sm'>Close</button>
              <button className='btn btn-danger btn-sm' onClick={confDelete} data-bs-dismiss="modal">Delete</button>
             </div>
          </div>
        </div>
      </div>
  
    </>
  )

   }
   

export default Category