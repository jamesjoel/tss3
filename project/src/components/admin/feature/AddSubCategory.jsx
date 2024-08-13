import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../../util/API_URL'


const AddSubCategory = () => {
    let navigate = useNavigate();
    let [allCate, setAllCate] = useState([]);

    let subCateFrm = useFormik({
        initialValues : {
            name : "",
            category : ""
        },
        onSubmit : (data)=>{
            // console.log(data);
            axios.post(API_URL+"/subcategory", data).then(response=>{
                console.log(response.data);
                navigate("/admin/sub-category")
            })
        }
    })


    useEffect(()=>{
        axios.get(API_URL+"/category").then(response=>{
            setAllCate(response.data);
        })
    },[])


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2 my-5">
                <h4>Add New Sub- Category</h4>
                <form onSubmit={subCateFrm.handleSubmit}>
                <div className='my-3'>
                    <label>Select Category</label>
                    <select onChange={subCateFrm.handleChange} name="category" className='form-control'>
                        <option>Select</option>
                        {
                            allCate.map(item=><option key={item._id}>{item.name}</option>)
                        }
                    </select>

                </div>
                <div className='my-3'>
                    <label>Sub Category Name</label>
                    <input name='name' onChange={subCateFrm.handleChange} type='text' className='form-control' />
                </div>
                <br />
                <button type='submit' className='btn btn-success'>Add</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddSubCategory