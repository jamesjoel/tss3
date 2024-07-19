import React, {useEffect, useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import SingupSchema from '../../../schema/SignupSchema'

const Signup = () => {
    let [country, setCountry] = useState([]);
    let navigate = useNavigate();
    let signupFrm = useFormik({
        validationSchema : SingupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            repass : "",
            address : "",
            city : "",
            gender : "",
            contact : ""
        },
        onSubmit : (data)=>{
            console.log("*****");
           axios.post("http://localhost:3000/api/signup", data).then(response=>{
            navigate("/login");
           })
        }
    });
    let [cityArr, setCityArr] = useState([]);

    useEffect(()=>{

        axios.get("http://localhost:3000/api/city").then(response=>{
            setCityArr(response.data);
        })

    },[])

    useEffect(()=>{
        axios.get("http://localhost:3000/api/country").then(response=>{
            setCountry(response.data);
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
                            <input name="name" onChange={signupFrm.handleChange} type='text' className={'form-control '+ (signupFrm.errors.name && signupFrm.touched.name ? 'is-invalid' : '')} />
                            {
                                signupFrm.errors.name && signupFrm.touched.name 
                                ?
                                <small className='text-danger'>{ signupFrm.errors.name }</small>
                                :
                                ''
                            }

                        </div>
                        <div className='my-2'>
                            <label>Email</label>
                            <input name="email" onChange={signupFrm.handleChange} type='text' className={'form-control '+(signupFrm.errors.email && signupFrm.touched.email ? 'is-invalid' : '')} />
                            {
                                signupFrm.errors.email && signupFrm.touched.email
                                ?
                                <small className='text-danger'>{ signupFrm.errors.email }</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-2'>
                            <label>Password</label>
                            <input name="password" onChange={signupFrm.handleChange} type='password' className={'form-control '+(signupFrm.errors.password && signupFrm.touched.password ? 'is-invalid' : '')} />
                            {
                                signupFrm.errors.password && signupFrm.touched.password
                                ?
                                <small className='text-danger'>{ signupFrm.errors.password }</small>
                                :
                                ''

                            }
                        </div>
                        <div className='my-2'>
                            <label>Re-Password</label>
                            <input name="repass" onChange={signupFrm.handleChange} type='password' className={'form-control '+(signupFrm.errors.repass && signupFrm.touched.repass ? 'is-invalid' : '')} />
                            {
                                signupFrm.errors.repass && signupFrm.touched.repass
                                ?
                                <small className='text-danger'>{ signupFrm.errors.repass }</small>
                                :
                                ''

                            }
                        </div>
                        <div className='my-2'>
                            <label>Address</label>
                            <textarea name="address" onChange={signupFrm.handleChange} className={'form-control '+(signupFrm.errors.address && signupFrm.touched.address ? 'is-invalid' : '')} ></textarea>
                            {
                                signupFrm.errors.address && signupFrm.touched.address
                                ?
                                <small className='text-danger'>{ signupFrm.errors.address }</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-2'>
                            <label>City</label>
                            <select name="city" onChange={signupFrm.handleChange} className={'form-control '+(signupFrm.errors.city && signupFrm.touched.city ? 'is-invalid' : '')} >
                                <option>Select</option>
                                {
                                    cityArr.map(item=><option>{item.city}</option>)
                                }
                            </select>
                            {
                                signupFrm.errors.city && signupFrm.touched.city
                                ?
                                <small className='text-danger'>{ signupFrm.errors.city }</small>
                                :
                                ''

                            }
                        </div>
                        <div className='my-2'>
                            <label>Gender</label>
                            <br />
                            Male &nbsp;<input name="gender" onChange={signupFrm.handleChange} type='radio' value="male" />
                            &nbsp;&nbsp;&nbsp;
                            Female &nbsp;<input type='radio' name="gender" onChange={signupFrm.handleChange} value="female"/>
                            <br />
                            {
                                signupFrm.errors.gender && signupFrm.touched.gender
                                ?
                                <small className='text-danger'>{ signupFrm.errors.gender }</small>
                                :
                                ''

                            }
                        </div>
                        <div className='my-2'>
                            <label>Contact</label>
                            <div className='input-group'>

                            <select className='input-group-prepand'>
                                <option>Code</option>
                                {
                                    country.map(item=><option>{item.code} {item.dial_code}</option>)
                                }
                            </select>
                            <input name="contact" onChange={signupFrm.handleChange} type='text' className={'form-control '+(signupFrm.errors.contact && signupFrm.touched.contact ? 'is-invalid' : '')} />
                            </div>
                            {
                                signupFrm.errors.contact && signupFrm.touched.contact
                                ?
                                <small className='text-danger'>{ signupFrm.errors.contact }</small>
                                :
                                ''

                            }
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