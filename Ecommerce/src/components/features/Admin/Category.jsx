import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect } from 'react'
import Api_Url from '../../../constants/Api_Url'
const Category = () => {

  let [Category ,SetCategory]=useState([]);
 useEffect(()=>{
  axios.get(Api_Url+"Category").then((response)=>{
    SetCategory(response.data);
  })
  },[])
  return (
    <>
    <div className='Container'>
      <div className='row'>
        <div className='col-md-8 offset-2 my-6'>
          <h4>Categories</h4>
         <NavLink to= "/Admin/Category/Add" className='btn btn-primary'>Add Category</NavLink>
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
                <td><i className="fa-solid fa-pen"></i></td>
                <td ><i className="fa-solid fa-trash"></i></td>
               </tr>
              )}
            

            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )

   }
   

export default Category