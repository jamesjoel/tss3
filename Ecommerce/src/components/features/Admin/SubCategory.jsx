import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect } from 'react'
import Api_Url from '../../../constants/Api_Url'
const SubCategory = () => {

  let [SubCategory ,SetSubCategory]=useState([]);
 useEffect(()=>{
  axios.get(Api_Url+"SubCategory").
  then((response)=>{
    SetSubCategory(response.data);
  })
  },[])
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
                <td><i className="fa-solid fa-pen"></i></td>
                <td ><i className="fa-solid fa-trash"></i></td>
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
    </>
  )

   }
   

export default SubCategory