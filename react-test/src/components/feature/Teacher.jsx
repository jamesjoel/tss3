import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Teacher = () => {

    let [allTeacher, setAllTeacher] = useState([])
    let [teacher, setTeacher] = useState({});
    useEffect(()=>{
        axios.get("http://localhost:3000/teacher")
        .then(response=>{
            console.log(response.data)
            setAllTeacher(response.data);
        })
    },[])

    let askDelete = (obj)=>{
        setTeacher(obj);
    }
    let confDelete = ()=>{
        axios.delete("http://localhost:3000/teacher/"+teacher.id)
        .then(response=>{
            setAllTeacher(()=>{
                return allTeacher.filter(item=>item.id != teacher.id);
            })
        })  
    }

  return (
    <>
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <h4>All Teacher</h4>
                <NavLink to="/teacher/add" className='btn btn-info'>Add Teacher</NavLink>
                <table className='table table-dark my-3'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Class</th>
                            <th>City</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTeacher.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.class}</td>
                                        <td>{item.city}</td>
                                        <td><button onClick={()=>askDelete(item)} data-bs-toggle="modal" data-bs-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

        <div className='modal fade' id='delModal'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Delete Teacher !</h3>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure want to delete <b>{teacher ? teacher.name : ''}</b> ?</p>
                    </div>
                    <div className="modal-footer">
                        <button className='btn btn-dark' data-bs-dismiss="modal">Close</button>
                        <button onClick={confDelete} className='btn btn-danger' data-bs-dismiss="modal">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Teacher