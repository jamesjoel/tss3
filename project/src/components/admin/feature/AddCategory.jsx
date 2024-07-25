import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'

const AddCategory = () => {
    let navi = useNavigate();
    let CateFrm = useFormik({
        initialValues : {
            name : ""
        },
        onSubmit : (data)=>{
            axios.post(API_URL+"/category", data).then(response=>{
                    navi("/admin/category");
            })
        }
    })


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2 my-5">
                <h4>Add New Category</h4>
                <form onSubmit={CateFrm.handleSubmit}>
                    <div className='my-3'>
                        <label>Category Name</label>
                        <input type='text' name='name' onChange={CateFrm.handleChange} className='form-control' />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-success'>Add</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddCategory

/*
Hooks
    useState            React
    useEffect           React
    
    useFormik           formik
    
    useNavigate         react-router-dom

Component       react-router-dom
    BorwserRouter
    NavLink
    Routes
    Route



*/