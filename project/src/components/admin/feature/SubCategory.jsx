import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL';

const SubCategory = () => {
  let [subCate, setSubCate] = useState({});
  let [allSubCate, setAllSubCate] = useState([]);
  useEffect(()=>{
    axios.get(API_URL+"/subcategory").then(response=>{
      setAllSubCate(response.data)
    })
  },[])

  let askDelete= (obj)=>{
    // console.log(obj)
    setSubCate(obj);
  }

  let confDelete = ()=>{
    axios.delete(API_URL+"/subcategory/"+subCate._id).then(response=>{
        setAllSubCate(()=>{
          return allSubCate.filter(item=> item._id != subCate._id);
        })
    })


  }


  let confAllDelete = ()=>{
    axios.delete(API_URL+"/subcategory/deleteall").then(response=>{
      setAllSubCate([]);

    })
  }


  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12 my-4">
                <h4>Sub-Categories</h4>
                <NavLink to='/admin/sub-category/add' className='btn btn-primary'>Add New Sub-Category</NavLink>
                <button data-toggle="modal" data-target="#delAllModal" className='btn btn-danger mx-2'>Delete All Sub-Category</button>
                <table className="table table-dark table-bordered my-4">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Category Name</th>
                      <th>Sub-Category Name</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allSubCate.map((item, index)=><tr key={item._id}>
                          <td>{index+1}</td>
                          <td>{item.category}</td>
                          <td>{item.name}</td>
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
                    <h4>Delete Sub-Category</h4>
                  </div>
                  <div className='modal-body'>
                    <p>Are you sure want to delete <b>{ subCate.name }</b></p>
                  </div>
                  <div className='modal-footer'>
                    <button data-dismiss="modal" className='btn btn-danger btn-sm' onClick={confDelete}>Delete</button>
                    <button data-dismiss="modal"  className='btn btn-dark btn-sm'>Close</button>
                  </div>
                </div>
              </div>
            </div>


            <div id='delAllModal' className='modal fade'>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4>Delete All Sub-Category</h4>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure want to delet all Sub-Category</p>
                  </div>
                  <div className="modal-footer">
                    <button data-dismiss="modal" onClick={confAllDelete} className='btn btn-danger btn-sm'>Delete All</button>
                    <button data-dismiss="modal" className='btn btn-dark btn-sm'>Close</button>
                  </div>
                </div>
              </div>
            </div>


    </>
    
  )
}

export default SubCategory