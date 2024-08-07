import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import LoginSchema from '../../../schema/LoginSchema'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'

const Login = () => {
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let LoginFrm = useFormik({
        validationSchema : LoginSchema,
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : (data)=>{
            axios.post(API_URL+"/user/auth", data).then(response=>{
                console.log(response.data)
                if(response.data.success==true)
                {
                    let token = response.data.token;
                    localStorage.setItem("access-token", token);
                    localStorage.setItem("name", response.data.name)
                    navigate("/");
                }
                else{
                    setErrMsg("This Email and Password is Invalid !");
                }
            })
        }
    })


  return (
    <div className="container" style={{minHeight : "600px"}}>
            <form onSubmit={LoginFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card my-5 border-orange">
                    <div className="card-header bg-orange">
                        <h4 className='text-light mb-0'>User Login</h4>
                        <small className='text-light'>If you are a new customer <NavLink to='/signup'>click here</NavLink></small>
                    </div>
                    <div className="card-body">
                        <div className='my-2'>
                            <label>Email</label>
                            <input type='text' name="email" onChange={LoginFrm.handleChange} className={'form-control '+(LoginFrm.errors.email && LoginFrm.touched.email ? 'is-invalid' : '')} />
                            {
                                LoginFrm.errors.email && LoginFrm.touched.email
                                ?
                                <small className='text-danger'>{LoginFrm.errors.email}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-2'>
                            <label>Password</label>
                            <input type='password' name="password" onChange={LoginFrm.handleChange} className={'form-control '+(LoginFrm.errors.password && LoginFrm.touched.password ? 'is-invalid' : '')} />
                            {
                                LoginFrm.errors.password && LoginFrm.touched.password
                                ?
                                <small className='text-danger'>{LoginFrm.errors.password}</small>
                                :
                                ''
                            }
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-orange'>Login</button>
                        <p className='text-danger text-center'>
                            {
                                errMsg
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
            </form>
    </div>
  )
}

export default Login