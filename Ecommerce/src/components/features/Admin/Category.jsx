import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
const Category = () => {
  axios.get("")
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
              </tr>
            </thead>
            <tbody>


            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
   }

export default Category