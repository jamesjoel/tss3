import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL';
import { MdDeleteForever } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

const Category = () => {
    let [cate, setCate] = useState({});
    let [allCate, setAllCate] = useState([]);
    useEffect(()=>{
        axios.get(API_URL+"/category").then(response=>{
            setAllCate(response.data);
        })
    },[])

    let askDelete = (obj)=>{
        setCate(obj);
    }

    let confDelete = ()=>{
        axios.delete(API_URL+"/category/"+cate._id).then(response=>{
            setAllCate(()=>{
                return allCate.filter(item => item._id != cate._id );
            })
        })
    }

  return (
    <>
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCate.map((item, index)=>{
                                return(
                                    <tr key={item._id}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td><button onClick={()=>askDelete(item)} data-target="#delModal" data-toggle="modal" className='btn btn-danger'><MdDeleteForever /></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div className="modal fade" id="delModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Delete Category</h4>
                </div>
                <div className="modal-body">
                    <p>Are you sure want to delete <b>{cate.name}</b></p>
                </div>
                <div className="modal-footer">
                    <div data-dismiss="modal" onClick={confDelete} className='btn btn-danger btn-sm'><MdDelete /></div>
                    <div data-dismiss="modal" className='btn btn-dark btn-sm'><IoIosCloseCircle /></div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Category