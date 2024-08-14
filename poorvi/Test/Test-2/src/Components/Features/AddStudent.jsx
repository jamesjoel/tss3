import React from 'react'
import {useFormik} from 'formik'
import * as YUP from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 


const AddStudent = () => {
    let stuSchema = YUP.object({
        Name:YUP.string().required("Enter your name"),
        Fees:YUP.string().required("Enter your fees"),
        Address:YUP.string().required("Enter your Address"),
        Class:YUP.string().required("Enter your class"),
        City:YUP.string().required("Enter your city")
 })
    let navigate=useNavigate();
    let stuFrm= useFormik({
        validationSchema:stuSchema,
        initialValues:{
            Name:"",
            Fees:"",
            Address:"",
            class:"",
            City:"",
    
        },
        onSubmit:(data)=>{
            axios.post("http://localhost:3000/Student",data).then(response=>{
                // console.log(response.data)
                 navigate("/Student");
            })
        }
    
    })
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <form  className='form-control' onSubmit={stuFrm.handleSubmit} >
                  <div className='my-4'>
                    <label>Name</label>
                    <input type='text'  name='Name' className='form-control'  onChange={stuFrm.handleChange} />
                    {
                        stuFrm.errors.Name&&stuFrm.touched.Name
                        ?
                        <small ><p>{stuFrm.errors.Name}</p></small>
                        :
                        ""
                    }
                  </div>
                  <div className='my-4'>
                    <label>Fees</label>
                    <input type='text' className='form-control'   name='Fees' onChange={stuFrm.handleChange}/>
                    {
                        stuFrm.errors.Fees&&stuFrm.touched.Fees
                        ?
                        <small ><p>{stuFrm.errors.Fees}</p></small>
                        :
                        ""
                    }
                  </div>
                  <div className='my-4'>
                    <label>City</label>
                    <select className='dropdown form-control'name='City'onChange={stuFrm.handleChange} >
                        <option>Select</option>
                        <option>Indore</option>
                        <option>Bhopal</option>
                        <option>Ujjain</option>
                        </select> 
                        {
                        stuFrm.errors.City&&stuFrm.touched.City
                        ?
                        <small ><p>{stuFrm.errors.City}</p></small>
                        :
                        ""
                    }
                  </div>
                  <div className='my-4'>
                    <label>Address</label>
                    <textarea type='text' name='Address' className='form-control' onChange={stuFrm.handleChange}></textarea>
                    {
                        stuFrm.errors.Address&&stuFrm.touched.Address
                        ?
                        <small ><p>{stuFrm.errors.Address}</p></small>
                        :
                        ""
                    }
                  </div>
                  <div className='my-4'>
                    <label>Class</label>
                    <input type='text'  name='class'className='form-control'   onChange={stuFrm.handleChange}/>
                    {
                        stuFrm.errors.Class&&stuFrm.touched.Class
                        ?
                        <small ><p>{stuFrm.errors.Class}</p></small>
                        :
                        ""
                    }
                  </div>
                  <div className='my-4'>
                    
                  <button type='submit ' className='btn btn-success' onChange={stuFrm.handleChange}>Submit 
                    </button>
                  </div>
                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default AddStudent