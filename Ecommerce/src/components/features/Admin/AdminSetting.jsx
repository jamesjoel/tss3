import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import AdminAddSchema from "../../../Schema/AdminAddSchema"
import axios from 'axios'
import Api_Url from '../../../constants/Api_Url'

const AdminSetting = () => {
    let [showMsg,setShowMsg]=useState(false);
    let [allAdmin,setAllAdmin]=useState([]);
    useEffect(()=>{
      axios.get(Api_Url+'Admin/Add')
      .then((response)=>{
      setAllAdmin(response.data)});
    
    })
    let addFrm= useFormik({
        validationSchema:AdminAddSchema,
      initialValues:{
        name:"",
        password:"",
        repass:""
      }
      ,onSubmit:(formdata,{resetForm})=>{
     axios.post(`${Api_Url}Admin/Add`,formdata)
     .then(response=>{
        console.log(response.data);
        setShowMsg(true);
        resetForm()
     })
      }
    })
  return (
<>

<div className="row my-4">
    <div className="col-md-12 ">
        <h4>Administrator Setting</h4>
        <div className="card border border-dark">
            <div className="card-body">
                <form onSubmit={addFrm.handleSubmit}>
                <h4>Add new Administrator</h4>
             <div className="row">
                <div className="col-md-3">
                    <input type="text" value={addFrm.values.name} name="name" className={"form-control "+(addFrm.errors.name &&addFrm.touched.name ? 'is-invalid' :'')} placeholder="Add new Admin" onChange={addFrm.handleChange}></input>
                </div>
                <div className="col-md-3">
                  <input type="password"value={addFrm.values.password}  name="password" className={"form-control "+(addFrm.errors.password &&addFrm.touched.password ? 'is-invalid' :'')} placeholder='Enter Password' onChange={addFrm.handleChange}></input>  
                </div>
                <div className="col-md-3">
                <input type="password"value={addFrm.values.repass} name="repass"className={"form-control "+(addFrm.errors.repass &&addFrm.touched.repass ? 'is-invalid' :'')} placeholder='Enter your password again'  onChange={addFrm.handleChange}></input>  
                </div>
                <div className="col-md-3">
                    {/* <div className="d-grid"> */}
                  <button  type="submit" className='btn btn-success w-100' style={{borderRadius: "12px"}}>Add</button>  
                   {/* </div> */}
              </div>
                </div>   
                </form>
                {
                    showMsg?
                    <div className="alert alert-info">
                    Admin Added Successfully...
                    <button className='btn-close'>close</button>
                    </div> 
                    :
                    ""
                }
                
             </div>
        </div>
        <div className='col-md-8 offset-md-2 my-4' >
        <table className="table-dark table-bordered  w-100" >
          <thead>
            <tr>
              <th>S.no</th>
              <th>Admin Username</th>
              <th>Admin State</th>
            </tr>
          </thead>
          <tbody>
            {
              allAdmin.map((item,index)=>{
                return(
                 <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
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

export default AdminSetting