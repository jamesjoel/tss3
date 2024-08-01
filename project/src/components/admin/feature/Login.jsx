import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import {useNavigate} from 'react-router-dom'

const Login = () => {



  let navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("admin-access-token"))
    {
      navigate("/admin/dashboard"); // admin dashboard
    }
  },[])


  let [errMsg, setErrMsg] = useState("")
  let adminFrm = useFormik({
    initialValues : {
      username : "",
      password : ""
    },
    onSubmit : (data)=>{
      axios.post(API_URL+"/admin/auth", data).then(response=>{
        if(response.data.success==true)
        {
            localStorage.setItem("admin-access-token", response.data.token);
            navigate("/admin/dashboard");
        }
        else{
          setErrMsg("This Username and Password is Invalid")
        }
      })
    }
  })


  return (
    <div className="container my-5">
      <form onSubmit={adminFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card border border-dark">
            <div className="card-header bg-dark">
              <h6 className='text-light p-3'>Administrator Panel</h6>
            </div>
            <div className="card-body">
              <div className='my-3'>
                <label>Username</label>
                <input name='username' onChange={adminFrm.handleChange} type='text' className='form-control' />
              </div>
              <div className='my-3'>
                <label>Password</label>
                <input name='password' onChange={adminFrm.handleChange} type='password' className='form-control' />
              </div>
            </div>
            <div className="card-footer">
              <button type='submit' className='btn btn-dark'>Login</button>
              <p className='text-danger text-center'>{errMsg}</p>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Login