import React ,{useState} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import {useFormik}  from 'formik'
import ChangePassSchema from "../../../Schema/ChangePassSchema"
import Api_Url from '../../../constants/Api_Url'
import axios from 'axios'
const ChangePass = () =>{
  
 let  navigate = useNavigate();
 let[errMsg,setErrMsg]=useState("")

  let ChangepassFrm=useFormik(
    {
     validationSchema:ChangePassSchema,
      initialValues:{
        password:"",
        newpass:"",
        repass:""
      },
      onSubmit:(data)=>{
      axios.post(`${Api_Url}User/changepass`,data,{headers:{Authorization: localStorage.getItem("user-access")}})
      .then((response)=>{
       if(response.data.success==true)
       {
          navigate("/profile");
       }
       else{
        setErrMsg("Incorrect current password")
       }
      })
      }
    }
  )
return (
<>
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <h4>Welcome:{localStorage.getItem("name")}</h4>
      <div className="row">
        <div className="col-md-6 " >
          <h5>Change your Password</h5>
            <form onSubmit={ChangepassFrm.handleSubmit}>
              
            <div className="my-3">
                <label>Current Password</label>
                <input  type="password" name ='password' onChange={ChangepassFrm.handleChange}className='form-control'></input>
              {
                ChangepassFrm.errors.password &&  ChangepassFrm.touched.password
                              ?
                             <small className='text-danger'>{ ChangepassFrm.errors.password}</small>
                              :
                             ""
                             }
              </div>
              <div className="my-3">
                <label>Enter new Password</label>
                <input  type="password" name="newpass"  onChange={ChangepassFrm.handleChange}className='form-control'></input>
                {
                ChangepassFrm.errors.newpass &&  ChangepassFrm.touched.newpass
                              ?
                             <small className='text-danger'>{ ChangepassFrm.errors.newpass}</small>
                              :
                             ""
                             }
              </div>
              <div className="my-3">
                <label>Confirm new Password</label>
                <input  type="password"  name='repass' onChange={ChangepassFrm.handleChange} className='form-control'></input>
                {
                ChangepassFrm.errors.repass &&  ChangepassFrm.touched.repass
                              ?
                             <small className='text-danger'>{ ChangepassFrm.errors.repass}</small>
                              :
                             ""
                             }
                             {
                              errMsg
                              ?
                              <small className='text-danger'>{errMsg}</small>
                              :
                              ""
                             }
              </div>
              <button  type="submit"  className='btn btn-success'>Change</button>&nbsp;&nbsp;
              <button className='btn btn-info' onClick={()=>navigate("/Profile")}>Cancel</button>
            </form>
        </div>
      </div>
    </div>
  </div> 
</div>
</>
  )
}


export default ChangePass