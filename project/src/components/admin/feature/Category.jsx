import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

const Category = () => {

    let [allCate, setAllCate] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/category").then(response=>{
            setAllCate(response.data);
        })
    },[])

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 my-4">
                <h4>Categories</h4>
                <NavLink to='/admin/category/add' className='btn btn-primary'>Add New Category</NavLink>
                <table className="table table-dark mt-3">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCate.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Category