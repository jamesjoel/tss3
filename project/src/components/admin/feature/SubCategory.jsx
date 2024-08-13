import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL';

const SubCategory = () => {
  let [allSubCate, setAllSubCate] = useState([]);
  useEffect(()=>{
    axios.get(API_URL+"/subcategory").then(response=>{
      setAllSubCate(response.data)
    })
  },[])


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 my-4">
                <h4>Sub-Categories</h4>
                <NavLink to='/admin/sub-category/add' className='btn btn-primary'>Add New Sub-Category</NavLink>
                <table className="table table-dark table-bordered my-4">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Category Name</th>
                      <th>Sub-Category Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allSubCate.map((item, index)=><tr key={item._id}>
                          <td>{index+1}</td>
                          <td>{item.category}</td>
                          <td>{item.name}</td>
                      </tr>)
                    }
                  </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

export default SubCategory