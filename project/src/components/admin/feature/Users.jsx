import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {API_URL} from '../../../util/API_URL'

const Users = () => {

    let [allUser, setAllUser] = useState([]);
    useEffect(()=>{
        axios.get(API_URL+"/alluser").then(response=>{
            setAllUser(response.data);
        })
    },[])

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h3>List of all Users</h3>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((item, index)=><tr key={item._id}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>{item.city}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Users