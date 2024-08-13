import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Student = () => {
    let [allStudent, setAllStudent] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/student")
            .then(response => {
                console.log(response.data)
                setAllStudent(response.data)
            })
    }, []

    )
    return (
        <>
            <div className="container my-5">
                <NavLink className='btn btn-info' to='/add/student'>Add Student</NavLink>
                <div className="row">
                    <div className="col md-6 my-2">
                        <table className='table table-dark'>
                            <thead>
                                <tr>
                                    <th>serial No.</th>
                                    <th>Name</th>
                                    <th>Fees</th>
                                    <th>Class</th>
                                    <th>city</th>
                                    <th>Address</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allStudent.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.fees}</td>
                                                <td>{item.class}</td>
                                                <td>{item.city}</td>
                                                <td>{item.address}</td>
                                                <td><button className='btn btn-danger' data-bs-toggle='#id'>Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student