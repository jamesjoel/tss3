import React, {useEffect, useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Api_Url from '../../../constants/Api_Url';
import {useFormik} from 'formik'
import UserUpdateSchema from '../../../Schema/UserUpdateSchema';


// localhost:3001/api/User/info + token in Authrization in headers
const UpdateProfile= () => {
  let navigate =useNavigate();
  let[state,setState]=useState([]);
  useEffect(()=>{
    axios.get(Api_Url+"City")
    .then((response) =>{
           setState(response.data)
           })
   .catch((error)=>console.log(error));
   },[])
   
   let [city,setCity]=useState([]);
   let getCity=(e)=>{
    let x=e.target.value;
    axios.get(Api_Url+"City/State/"+x)
    .then(response=>{
    setCity(response.data);
    // UpdateForm.handleChange(e);
    })
   }
  let [user, setUser] = useState({});

  useEffect(()=>{
     axios.get(`${Api_Url}User/info`, { headers : { Authorization : localStorage.getItem('user-access') }})
    .then(response=>{
      console.log(response.data)
      setUser(response.data);
      getCity(response.data.state);
      // here we write this code to get the value of our city 
    })
    },[])
 
  let UpdateForm= useFormik({
    validationSchema:UserUpdateSchema,
    enableReinitialize:true,
    initialValues:user,
    onSubmit:(data)=>{
      // console.log(data);
      axios.post(Api_Url+"User/update",data,{headers:
        {Authorization:localStorage.getItem("user-access")}})
   .then((response)=>{
  if(response.data.success=true)
      {
        // console.log(data);
        localStorage.setItem("name",response.data.username)
      navigate("/Profile");
       }
   })
   }
 })
      return (
     <div className="container my-4 sm" style={{height:"700px"}} >
        <div className="row">
            <div className="col-md-12">
                <h4>Welcome : { localStorage.getItem("name") }</h4>
                 <div className="row">
                  <div className="col-md-4 ">
                    <form onSubmit={UpdateForm.handleSubmit}>
                      <div className="my-2">
                        <label>Full Name</label>
                        <input type="text"  name="username" className="form-control" onChange={UpdateForm.handleChange} value={UpdateForm.values.username}/>
                        {
                             UpdateForm.errors.username && UpdateForm.touched.username
                              ?
                             <small className='text-danger'>{UpdateForm.errors.username}</small>
                              :
                             ""
                              }
                      </div>
                      <div className="my-2">
                        <label>Email</label>
                        <input type="text" disabled className="form-control" name="email" onChange={UpdateForm.handleChange} value={UpdateForm.values.email}/>
                        
                      </div>
                      <div className="my-2">
                        <label>Address</label>
                        <input type="textarea" name="address" className="form-control" onChange={UpdateForm.handleChange} value={UpdateForm.values.address}/>
                        {
                             UpdateForm.errors.address && UpdateForm.touched.address
                              ?
                             <small className='text-danger'>{UpdateForm.errors.address}</small>
                              :
                             ""
                             }
                      </div>
                      <div className="my-2">
                        <label>Pincode</label>
                        <input type="text" name="pincode" className="form-control" onChange={UpdateForm.handleChange} value={UpdateForm.values.pincode}/>
                        {
                             UpdateForm.errors.pincode && UpdateForm.touched.pincode
                              ?
                             <small className='text-danger'>{UpdateForm.errors.pincode}
                             </small>
                              :
                             ""
                             }
                      </div>
                      <div className="my-2">
                        <label>Contact</label>
                        <input type="text" name="contact" className="form-control" onChange={UpdateForm.handleChange} value={UpdateForm.values.contact}/>
                        {
                             UpdateForm.errors.contact && UpdateForm.touched.contact
                              ?
                             <small className='text-danger'>{UpdateForm.errors.contact}</small>
                              :
                             ""
                             }
                      </div>
                      <div className="my-2">
                        <label>State</label>
                        <select name="state" className="form-control" 
                        value={UpdateForm.values.state} 
                         onChange={(event)=>{getCity(event); UpdateForm.handleChange(event);} }>
                          <option>Select</option>
                          {
                          state.map((item,index)=><option key={index}>{item}</option>)
                          }
                          </select>
                          {
                             UpdateForm.errors.state && UpdateForm.touched.city
                              ?
                             <small className='text-danger'>{UpdateForm.errors.city}</small>
                              :
                             ""
                             }
                      </div>
                      <div className="my-2">
                        <label>City</label>
                         <select name="city" className="form-control" onChange={UpdateForm.handleChange} value={UpdateForm.values.city}>
                          <option>Select</option>
                          {
                          city.map((item,index)=><option key={index}>{item.city}</option>)
                           }    
                            {
                             UpdateForm.errors.city && UpdateForm.touched.city
                              ?
                             <small className='text-danger'>{UpdateForm.errors.city}</small>
                              :
                             ""
                             }              
                        </select>
                      </div>
                      <div className="my-2">
                      <label>Gender</label>
                      <br></br>
                       Male <input type="radio"name="gender"
                       onChange={UpdateForm.handleChange}
                       checked={UpdateForm.values.gender=="male"} 
                       value="male"/>&nbsp;&nbsp;
                       Female<input type="radio" name="gender"
                       onChange={UpdateForm.handleChange} 
                       checked={UpdateForm.values.gender=="female"}
                       value="female"
                       />
                        {
                             UpdateForm.errors.gender && UpdateForm.touched.gender
                              ?
                             <small className='text-danger'>{UpdateForm.errors.email}</small>
                              :
                             ""
                             }
                      </div>
                     
                      <br />
                       <button  type="submit"  className='btn btn-success'>Update</button>
                      &nbsp;&nbsp;<NavLink to="/profile" className='btn btn-primary'>Back</NavLink>
                    </form> 
                    </div>
                  
                </div> 
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile;