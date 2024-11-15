import React, { useEffect, useState } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import Api_Url from '../../../constants/Api_Url'
import SignUPSchema from '../../../Schema/UserSign'


// here we are doing validation in yup with syntax put all fromik form tags input tag tag value=YUP.string().required()
const SignUP = () => {
    let navigate =useNavigate();
    let[state,setState]=useState([]);
    let[showLoader ,setShowLoader]=useState(false);
    // let[Contact ,setContact]=useState([]);
    let [city,setCity]=useState([]);
   
   useEffect(()=>{
   axios.get(Api_Url+"City")
   .then((response) =>{
          setState(response.data)
          })
  .catch((error)=>console.log(error));
  },[])
// HERE BLANK ARRAY IS MUST
                 
    let SignUPForm= useFormik({
        validationSchema:SignUPSchema,
        initialValues:{
            username:""
            ,email:""
            ,password:""
            ,repass:""
            ,address:""
            ,pincode:""
            ,contact :""
            ,state:""
            ,city:""
            ,gender:""
     }, onSubmit:(data)=>{
      setShowLoader(true);
       axios.post(Api_Url+"User",data)
       .then((response)=>{
      if(response.data.success=true)
          {
           setShowLoader(false);
           navigate("/Login");
           }
       })
       }
     })

     let getCity=(e)=>{
      let x=e.target.value;
      axios.get(Api_Url+"City/State/"+x)
      .then(response=>{
      setCity(response.data);
      SignUPForm.handleChange(e);
      })
     }

   
  return (
    <>
  
     <div className='Container' style={{minHeight: "800px", width:"800px"}}>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>

                <form onSubmit={SignUPForm.handleSubmit}>
                     <div className='card my-5'>
                     <div className='card-header'>
                        <h3 className='text-aligb-centre'>User Login</h3>
                        
                    </div>
                    {/* here this this constant coding for form submission */}
                    <div className='card-body'>
                    <div className='form-group my-2'>
                    <label>Name</label>
                    <input onChange={SignUPForm.handleChange}  type='text' name='username'  placeholder='Username'className={'form-control '+(SignUPForm.errors.Username&&SignUPForm.touched.Username 
                      ? 'is-invalid':'')}/>
                     {
                       SignUPForm.errors.username && SignUPForm.touched.username
                          ?
                          <small className='text-danger'>{SignUPForm.errors.username}</small>
                          :
                         "" 
                     }
                        
                     </div>
                        <div className='my-2'>
                            <label>Email</label>
                            <input onChange={SignUPForm.handleChange}  type='text' name='email'  placeholder='Email'className={'form-control '+ (SignUPForm.errors.Email&&SignUPForm.touched.Email ?'is-invalid':'')}/>
                            {
                             SignUPForm.errors.email && SignUPForm.touched.email
                              ?
                             <small className='text-danger'>{SignUPForm.errors.email}</small>
                              :
                             ""
                             }
                            </div>
                            <div className='my-2'>
                            <label>Passsword</label>
                            <input onChange={SignUPForm.handleChange} type='password' name='password' placeholder='Enter Password'className={'form-control '+(SignUPForm.errors.password&&SignUPForm.touched.password ?'is-invalid':'')}/>
                            {
                              SignUPForm.errors.password && SignUPForm.touched.password
                              ?
                              <small className='text-danger'>{SignUPForm.errors.password}</small>
                              :
                              ""
                            }
                            </div>
                           <div className='my-2'>
                            <label> Confirm Passsword</label>
                            <input onChange={SignUPForm.handleChange} type='password' name='repass' placeholder='Enter Password' className={"form-control "+(SignUPForm.errors.repass&&SignUPForm.touched.repass ?"is-invalid":"")}/>
                             { SignUPForm.errors.repass && SignUPForm.touched.repass
                             ?
                            <small className='text-danger'>{SignUPForm.errors.repass}</small>
                            :
                            ""
                              } 
                           </div>
                           <div className='my-2'>
                            <label>Address</label>
                            <textarea  onChange={SignUPForm.handleChange}  className={'form-control '+(SignUPForm.errors.address&&SignUPForm.touched.address ?'is-invalid':'')} name='address'placeholder='Enter locality'></textarea>
                            { SignUPForm.errors.address && SignUPForm.touched.address
                              ?
                              <small className='text-danger'>{SignUPForm.errors.address}</small>
                               :
                              ""
                            } 
                           </div>
                           <div className='my-2'>
                           <label>Pincode</label>
                           <input onChange={SignUPForm.handleChange} type="text" name='pincode' placeholder='Enter pin' className={'form-control '+(SignUPForm.errors.pincode&&SignUPForm.touched.pincode ?'is-invalid':'')}/>
                            { 
                            SignUPForm.errors.pincode && SignUPForm.touched.pincode
                             ?
                            <small className='text-danger'>{SignUPForm.errors.pincode}</small>
                             :
                             ""
                             } 
                           </div>
                           <div className='my-2'>
                           <label>Contact</label>
                           <div className='input-group'>
                            <div className='input-group-text'>+91</div>
                        <input onChange={SignUPForm.handleChange} type="text" name='contact' placeholder='Enter phone number' className={'form-control '+(SignUPForm.errors.contact&&SignUPForm.touched.contact ?'is-invalid':'')}/>
                           {
                            SignUPForm.errors.pincode && SignUPForm.touched.pincode
                            ?
                           <small className='text-danger'>{SignUPForm.errors.pincode}</small>
                            :
                            ""
                            } 
                            </div>
                           </div>
                           <div className='my-2'>
                            <label>State</label>
                            <select  onChange={(e)=>{getCity(e); SignUPForm.handleChange(e);} }  name="state" placeholder="State"  className={'form-control '+(SignUPForm.errors.state&&SignUPForm.touched.state ?'is-invalid':'')}>
                            <option>select</option>
                          {

                            state.map((item,index)=><option key={index}>{item}</option>)
                            
                         }
                            </select>
                          {
                            SignUPForm.errors.state && SignUPForm.touched.state
                          ?
                           <small className='text-danger'>{SignUPForm.errors.state}</small>
                            :
                            ""
                          } 
                           </div>
                           <div className='my-2'>
                            <label>City</label>
                            <select  onChange={SignUPForm.handleChange }  name="city" placeholder='City'  className={'form-control '+(SignUPForm.errors.city&&SignUPForm.touched.city ?'is-invalid':'')}>
                              <option>Select</option>
                          {

                            city.map((item,index)=><option key={index}> {item.city}</option>)
                            // here we are using single parameterized callback function inside this
                          }
                            </select>
                           
                          {
                            SignUPForm.errors.city && SignUPForm.touched.city
                          ?
                           <small className='text-danger'>{SignUPForm.errors.city}</small>
                            :
                            ""
                          } 
                           </div>
                          
                        <div className='my-2'  >
                        <label>Gender</label>
                        <br>
                        </br>
                        Male &nbsp;&nbsp;<input type='radio' value="male"  onChange={SignUPForm.handleChange}  name='gender'/>
                         
                             &nbsp;&nbsp;&nbsp;&nbsp;Female&nbsp;&nbsp;<input type="radio" value="female" onChange={SignUPForm.handleChange} name='gender'/>
                          { 
                            SignUPForm.errors.gender && SignUPForm.touched.gender
                          ?
                            <small className='text-danger'>{SignUPForm.errors.gender}</small>
                          :
                          ""} 
                          </div>
                          {/* here we give value so it will the data valur in console */}
                          {/* here we are giving same name to two radio buttton means only one could be selected at a tine and also value is used to give the value to database ehile we click the button */}
                          </div>
                         
                         <div className='card-footer'>
                         <button  type='submit'  onChange={SignUPForm.handleChange}   className='btn btn-success'>Sign Up
                          {/* LOADER  */}
                          {
                            showLoader == true? 
                          <span className='spinner-border-dark spinner-border-sm'>
                          </span>
                          :
                          ""
                          }
                         </button>
                         <p className='mt-2' >Already have an account ?<span className='mr-2'></span>
                         <NavLink to="/Login"><u>Login</u></NavLink>
                        </p>
                        </div>
                       </div>
                    </form>
                      
             </div>
            </div>
            </div>
  
    </>
  )

}

export default SignUP

// here we used two hooks
// use effect- will load our imported content from db on page load
// for  formik we use from tag over our form content and put our on submit evemt under that on submit{fromname.handlesusubmit} here handle submit is a predefined funtction 
//on change when user type anything inside every  input tag we are using evet onChange={formname.handle change}


/*

yup- used for validation of data
PUT VALIDATIONSCHEMA = VALIDATION OBJECT UNSER FORMIK
 className={'form-control '+(SignUPForm.errors.city&&SignUPForm.touched.city ?'is-invalid':'')
 this is necessary to give space after from-control string will not concatinate like form-contrl is-invalid

 we will use features like .email()to let enter validate email by user
ref isn used to match one type to input data to another
syntax- oneOf([YUP.ref('password')])
*/
