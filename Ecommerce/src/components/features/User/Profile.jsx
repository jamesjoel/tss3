import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Api_Url from '../../../constants/Api_Url';


// localhost:3001/api/User/info + token in Authrization in headers
const Profile = () => {
  let [user, setUser] = useState({});

  useEffect(()=>{
     axios.get(`${Api_Url}User/info`, { headers : { Authorization : localStorage.getItem('user-access') }})
    .then(response=>{
      console.log(response.data)
      setUser(response.data);
    })

  },[])
      return (
     <div className="container my-4" style={{height:"700px"}} >
        <div className="row">
            <div className="col-md-12">
                <h4>Welcome : { localStorage.getItem("name") }</h4>
                 <div className="row">
                  <div className="col-md-6 ">
                  { 
                   user ?
                  <table className="table table-dark table-bordered table-striped">
                      <tbody>
                        <tr>
                          <th>Full Name</th>
                          <td>{user.username}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{user.email}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>{user.gender}</td>
                        </tr>
                        <tr>
                          <td>Contact</td>
                          <td>{user.contact}</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>{user.address}</td>
                        </tr>
                        <tr>
                          <td>State</td>
                          <td>{user.state}</td>
                        </tr>
                        <tr>
                          <td>City</td>
                          <td>{user.city}</td>
                        </tr>
                      </tbody>
                    </table>
                    :
                    ""
                }
                     <NavLink to="/profile/update" className='btn btn-success'>Update Profile</NavLink>&nbsp;&nbsp;&nbsp;
                    <NavLink to="/profile/changepass" className='btn btn-primary'>Change Password</NavLink> 
                   </div>
                  
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Profile