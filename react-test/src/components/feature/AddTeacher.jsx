import React from 'react'
import {useFormik} from 'formik'
import * as YUP from 'yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

let TeacherSchema = YUP.object({
    name : YUP.string().required("Insert Name"),
    salary : YUP.string().required("Insert Salary"),
    class : YUP.string().required("Insert Class"),
    city : YUP.string().required("Select City"),
})

const AddTeacher = () => {
    let navigate = useNavigate();
    let TeacherFrm = useFormik({
        validationSchema : TeacherSchema,
        initialValues : {
            name : "",
            class : "",
            salary : "",
            city : ""
        },
        onSubmit : (data)=>{
            axios.post("http://localhost:3000/teacher", data)
            .then(response=>{
                navigate("/teacher");
            })
        }
    })

  return (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <h4>Add New Teacher</h4>
            <form onSubmit={TeacherFrm.handleSubmit}>
                <div className='my-3'>
                    <label>Name</label>
                    <input type='text' className='form-control' name='name' onChange={TeacherFrm.handleChange} />
                    {
                        TeacherFrm.errors.name && TeacherFrm.touched.name
                        ?
                        <small className='text-danger'>{TeacherFrm.errors.name}</small>
                        :
                        ''
                    }
                </div>
                <div className='my-3'>
                    <label>Salary</label>
                    <input type='text' className='form-control' name='salary' onChange={TeacherFrm.handleChange} />
                    {
                        TeacherFrm.errors.salary && TeacherFrm.touched.salary
                        ?
                        <small className='text-danger'>{TeacherFrm.errors.salary}</small>
                        :
                        ''
                    }
                </div>
                <div className='my-3'>
                    <label>Class</label>
                    <input type='text' className='form-control' name='class' onChange={TeacherFrm.handleChange} />
                    {
                        TeacherFrm.errors.class && TeacherFrm.touched.class
                        ?
                        <small className='text-danger'>{TeacherFrm.errors.class}</small>
                        :
                        ''
                    }
                </div>
                <div className='my-3'>
                    <label>City</label>
                    <select className='form-control' name='city' onChange={TeacherFrm.handleChange} >
                        <option>Select</option>
                        <option>Indore</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Delhi</option>
                    </select>
                    {
                        TeacherFrm.errors.city && TeacherFrm.touched.city
                        ?
                        <small className='text-danger'>{TeacherFrm.errors.city}</small>
                        :
                        ''
                    }
                </div>
                <div className='my-3'>
                    <button type='submit' className='btn btn-success'>Add</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddTeacher