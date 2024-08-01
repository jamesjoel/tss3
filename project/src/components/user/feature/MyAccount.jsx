import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './MyAccount.css'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'

const MyAccount = () => {
  let [user, setUser] = useState({});
  let navigate = useNavigate();

  useEffect(()=>{

    if(! localStorage.getItem("access-token"))
    {
      navigate("/login")
    }

  },[])

  let token = localStorage.getItem("access-token");
  useEffect(()=>{

    axios.get(API_URL+"/user/profile", {
      headers : { Authorization : token }
    }).then(response=>{
      // console.log(response.data);
      setUser(response.data);
    })

  },[])

  return (
    <div className='container my-5' style={{ minHeight: "700px" }}>
      <div className="row">
        <LeftMenu />
        <div className="col-md-9 px-5">
          <h3>Personal Information</h3>
          <div className='row'>
            <div className='col-md-6'>
              <div className='my-3'>
                <label className='h5'>Name</label>
                <input type='text' value={user.name} className='form-control p-4' disabled />
              </div>
              <div className='my-3'>
                <label className='h5'>Email</label>
                <input type='text' value={user.email} className='form-control p-4' disabled />
              </div>
              <div className='my-3'>
                <label className='h5'>Address</label>
                <textarea value={user.address} className='form-control p-4' disabled></textarea>
              </div>
              <div className='my-3'>
                <label className='h5'>City</label>
                <input type='text' value={user.city} className='form-control p-4' disabled />

              </div>
              <div className='my-3'>
                <label className='h5'>Gender</label>
                <br />
                Male&nbsp;&nbsp;&nbsp;<input type='radio' disabled checked={user.gender=="male" ? true : false} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Female&nbsp;&nbsp;&nbsp;<input type='radio' disabled checked={user.gender=="female" ? true : false} />

              </div>
              <NavLink to="" className="btn btn-info btn-sm">Edit</NavLink>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 mt-5'>
              <h4>FAQs</h4>
              <h6>What happens when I update my email address (or mobile number)?</h6>
              Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).

              <h6>When will my Flipkart account be updated with the new email address (or mobile number)?</h6>
              It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.

              <h6>What happens to my existing Flipkart account when I update my email address (or mobile number)?</h6>
              Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


let LeftMenu = () => {
  return (
    <div className="col-md-3 mt-5">
      <div className='bg-dark'>
      <ul className='nav flex-column'>
        <li className='nav-item p-3'>
          <NavLink className='nav-link  text-light my-hover' to="">My Profile</NavLink>
        </li>
        <li className='nav-item p-3'>
          <NavLink className='nav-link text-light my-hover' to="">My Order</NavLink>
        </li>
        <li className='nav-item p-3'>
          <NavLink className='nav-link text-light my-hover' to="">Pyment</NavLink>
        </li>
        <li className='nav-item p-3'>
          <NavLink className='nav-link text-light my-hover' to="">Logout</NavLink>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default MyAccount