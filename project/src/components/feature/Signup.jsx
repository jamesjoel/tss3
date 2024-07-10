import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'

const Signup = () => {

    let signupFrm = useFormik({
        initialValues : {
            name : "",
            email : "",
            password : "",
            repass : "",
            address : "",
            city : "",
            gender : ""
        },
        onSubmit : (data)=>{
           axios.post("http://localhost:3000/api/signup", data).then(response=>{
            console.log(response.data);
           })
        }
    });
    let [cityArr, setCityArr] = useState([]);

    useEffect(()=>{

        axios.get("http://localhost:3000/api/city").then(response=>{
            setCityArr(response.data);
        })

    },[])


  return (
    <div className="container" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={signupFrm.handleSubmit}>
                <div className="card my-5 border-orange">
                    <div className="card-header bg-orange">
                        <h4 className='text-light mb-0'>User Registration</h4>
                        <small className='text-light'>If you are already registered <NavLink to='/login'>click here</NavLink></small>
                    </div>
                    <div className="card-body">
                        <div className='my-2'>
                            <label>Name</label>
                            <input name="name" onChange={signupFrm.handleChange} type='text' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Email</label>
                            <input name="email" onChange={signupFrm.handleChange} type='text' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Password</label>
                            <input name="password" onChange={signupFrm.handleChange} type='password' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Re-Password</label>
                            <input name="repass" onChange={signupFrm.handleChange} type='password' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Address</label>
                            <textarea name="address" onChange={signupFrm.handleChange} className='form-control' ></textarea>
                        </div>
                        <div className='my-2'>
                            <label>City</label>
                            <select name="city" onChange={signupFrm.handleChange} className='form-control' >
                                <option>Select</option>
                                {
                                    cityArr.map(item=><option>{item.city}</option>)
                                }
                            </select>
                        </div>
                        <div className='my-2'>
                            <label>Gender</label>
                            <br />
                            Male &nbsp;<input name="gender" onChange={signupFrm.handleChange} type='radio' value="male" />
                            &nbsp;&nbsp;&nbsp;
                            Female &nbsp;<input type='radio' name="gender" onChange={signupFrm.handleChange} value="female"/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-orange'>Signup</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup