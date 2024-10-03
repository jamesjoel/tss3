import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import * as YUP from 'yup'
import { NavLink, useNavigate,useParams } from 'react-router-dom'
import Api_Url from '../../../constants/Api_Url'
const AddCategory = () => {
 let params = useParams();
 let [cate, setCat]=useState({category:""})
 useEffect(()=>
{
  if(params.a)
  {
    
    let id=params.a;
    axios.get(`${Api_Url}Category/${id}`)
    .then(response=>{
      setCat(response.data);
    })
  }
},[])
// VALIDATION SCHEMA FOR CATEGORY
  let CateSchema =YUP.object(
    {
      category:YUP.string().required("Insert category")
    }
  )
let navigate =useNavigate();
  let CateFrm= useFormik({
    validationSchema:CateSchema,
    enableReinitialize:true,
    initialValues:cate ,
    onSubmit : (data)=>
      {
        if(params.a)
        {
          axios.put(`${Api_Url}Category/${params.a}`,data)
          .then((response)=>{
            navigate("/Admin/Category"); 
          }
          )
        }
    else{
      axios.post(Api_Url+"Category",data).then((response)=>{
      console.log(response.data);
      navigate("/Admin/Category");})

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
          (params.a)
            ?
          "Update"
          :
         "Add New"
          }
          Category         
        </h4>
        <form onSubmit={CateFrm.handleSubmit}>
          <div className='my-3'>
            <label>Category Name</label>
            <input type='text' value={CateFrm.values.category} placeholder='Enter Category' onChange={CateFrm.handleChange} className={'form-control '+(CateFrm.errors.category&&CateFrm.touched.category ?"is-valid":"")}  name='category'></input>
            <br></br>
            {
              CateFrm.errors.category&&CateFrm.touched.category
               ?
               <small className='text-danger'>{CateFrm.errors.category}</small>
               :
               ""
            }
            <button  type='submit' className='btn btn-success'>{params.a?"Update":"Add"}</button>
            <NavLink className="btn btn-info" to="/Admin/Category" >Back</NavLink>
          </div>
        </form>
      </div>
    </div>
   </div>
   </>
  )
}

export default AddCategory