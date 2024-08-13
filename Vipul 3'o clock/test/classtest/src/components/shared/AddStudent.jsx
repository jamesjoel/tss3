import React from 'react'
import { useFormik } from 'formik'
import *as YUP from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Student from '../features/Student'


const AddStudent = () => {
    let Navigate = useNavigate();
    let studentfrm = useFormik({
        initialValues: {
            name: "",
            fees: "",
            class: "",
            city: "",
            address: ""
        },
        onSubmit: (data) => {
            axios.post("http//localhost:3000/student", data).then(response => {
                Navigate("/Student");
            })
        }
    })


    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className='form-control' onSubmit={studentfrm.handleChange}>
                            <div className='my-3'>
                                <label>Name</label>
                                <input className='form-control' type="text" name='name' onChange={studentfrm.handleChange} />
                            </div>
                            <div className='my-3'>
                                <label>Fees</label>
                                <input className='form-control' type="text" name='fees' onChange={studentfrm.handleChange} />
                            </div>
                            <div className='my-3'>
                                <label>class</label>
                                <input className='form-control' type="text" name='class' onChange={studentfrm.handleChange} />
                            </div>
                            <div className='my-3'>
                                <label>City</label>
                                <select className='dropdown form-control' name='city' onChange={studentfrm.handleChange} >
                                    <option>select</option>
                                    <option>Indore</option>
                                    <option>ujjain</option>
                                    <option>Dewas</option>
                                    <option>Pune</option></select>


                            </div>
                            <div className='my-3'>
                                <label>Address</label>
                                <textarea className='form-control' type="text" name='address' onChange={studentfrm.handleChange}></textarea>
                            </div>
                            <button type='submit' className='btn btn-info' onChange={studentfrm.handleChange}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStudent