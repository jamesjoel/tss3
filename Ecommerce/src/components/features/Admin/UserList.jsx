import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Api_Url from '../../../constants/Api_Url';


const UserList = () => {

  let [allUser ,setAllUser]=useState([]);
  useEffect(()=>
  {
    axios.get(Api_Url+"User")
    .then((response)=>{
      // console.log(response.data);
       setAllUser(response.data);
    })
  })
  return (
<>
<div className="row">
  <div className='col-md-8 my-4 offset-2'>
    <h4 className='text-center'>
      List of all Users
    </h4>
{
  allUser.length>0
  ?
  <table className='table table-dark table-hover table-striped'>
      <thead>
        <tr>
          <th>S.no.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
{
  allUser.map((item,index)=>
    <tr key={index}>
      <td>{index+1}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.contact}</td>
      <td>{item.address}</td>
    </tr>
  
  )
}
      </tbody>
    </table>
    :
    <div className='alert alert-danger'>
      No User Data Present
    </div>
}
    
  </div>
</div>
</>
  )
}

export default UserList