import React from 'react'
import AdminSchema from '../../../Schema/AdminSchema'
import {useFormik} from  'formik'
import axios from 'axios';

import Api_Url from '../../../constants/Api_Url'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  let navigate=useNavigate();
  
  let LoginFrm=useFormik({
    validationSchema:AdminSchema,
    initialValues:{
      name:"",
      password:""
 },onSubmit:(Formdata)=>{
      axios.post(Api_Url+"Admin",Formdata)
      .then((response)=>{
       if(response.data.success==true)
       {
        localStorage.setItem("access-token",response.data.token);
        navigate("/Admin/Dashboard");
       }
      })
    }
  })
  return (
    
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={LoginFrm.handleSubmit}>
          <div className="card">
            <div className="card-header bg-info text-dark">
              <h5>Administrator Login</h5>
            </div>
            <div className="card-body">
              <div className='my-2'>
              <label>Username</label>
              <input type="text" onChange={LoginFrm.handleChange} name='name' placeholder='Enter Admin name' className={'form-control '+(LoginFrm.errors.name&&LoginFrm.touched.name ? "is-invalid":"")}/>
                </div>
                <div className="my-2">
                  <label>Password </label>
                  <input type="password" onChange={LoginFrm.handleChange} name="password" placeholder='Enter Password' className={'form-control '+(LoginFrm.errors.password&&LoginFrm.touched.password ? "is-invalid":"")}></input>
                </div>
            </div>
            <div className="card-footer">
              <button type="submit" className='btn btn-info text-dark'>Login</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login