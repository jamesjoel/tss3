import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import * as YUP from 'yup'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Api_Url from '../../../constants/Api_Url'
const AddSubCate = () => {
  let params=useParams();
  let [Category,SetCategory]=useState([]);
  let[SubCate ,SetSubCate]=useState({
    category: "",
    name:""
  },)
  useEffect(()=>{
    if(params.a)
    {
      let id=params.a;
    axios.get(`${Api_Url}SubCategory/${id}`)
    .then((response)=>{
    SetSubCate(response.data);
    })
  }
  })
  useEffect(()=>{
    axios.get(Api_Url+"Category")
    .then(response=>{
        SetCategory(response.data)
    })
  },[])
  let SubCateSchema =YUP.object(
    {
      category:YUP.string().required("Insert category"),
      name:YUP.string().required("enter sub-category")
    }
  )
let navigate =useNavigate();
  let SubCateFrm= useFormik({
    validationSchema:SubCateSchema,
    initialValues:SubCate,
    onSubmit:(data)=>{
      if(params.a){
        axios.put(`${Api_Url}SubCategory/${params.a}`,data)
        .then((response)=>{
          
      })
      navigate("/Admin/SubCategory");
    }
    else{
      axios.post(Api_Url+"SubCategory",data)
      .then(response=>{
        console.log(response.data)})
        navigate("/Admin/SubCategory")
    }
  }
    // here using post because we are submiting form

  })
  return (
   <>
   <div className='container'>
    <div className='row'>
      <div className='col-md-8 offset-md-2'>
        <h4 className='text-align-center'>
         {
           (params.a)?
           "Update"
           :
           "Add"
         } SubCategory
        </h4>
        <form onSubmit={SubCateFrm.handleSubmit}>
        <div className='my-3'>
            <label>Select Category </label>
             <select name='category' value={SubCateFrm.values.category} onChange={SubCateFrm.handleChange} className={'form-control '+(SubCateFrm.errors.name&&SubCateFrm.touched.name ?"is-valid":"")}>
             <option>Select</option>
              {
                
              Category.map((item)=>
               
              <option key={item._id}>{item.category}</option>)
            }
             </select>
            </div>
          <div className='my-3'>
            <label>SubCategory Name</label>
            <input type='text' name='name'value={SubCateFrm.values.name} placeholder='Enter SubCategory' onChange={SubCateFrm.handleChange} className={'form-control '+(SubCateFrm.errors.name&&SubCateFrm.touched.name ?"is-valid":"")} ></input>
            <br></br>
            {
              SubCateFrm.errors.name&&SubCateFrm.touched.name
               ?
               <small className='text-danger'>{SubCateFrm.errors.name}</small>
               :
               ""
            }
            <button  type='submit'  className='btn btn-success'>{(params.a)?"Update":"Submit"}</button>
            <NavLink className="btn btn-info" to="/Admin/SubCategory" >Back</NavLink>
            </div>
        </form>
      </div>
    </div>
   </div>
   </>
  )
}

export default AddSubCate