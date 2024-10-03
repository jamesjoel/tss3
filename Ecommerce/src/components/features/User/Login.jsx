import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik} from 'formik'
import axios from 'axios'
import Api_Url from '../../../constants/Api_Url'
import LoginfrmSchema from '../../../Schema/UserLogin'
import { useNavigate } from 'react-router-dom'

const Login = () =>{
   let navigate=useNavigate();
   let[errMsg ,setErrMsg]=useState();
   let [showLoader,setShowLoader]=useState(false);
    
   const Loginfrm=useFormik({
        validationSchema:LoginfrmSchema,
        initialValues:{
            email:""
            ,password:""
        }
  ,onSubmit:(data)=>{
    axios.post(Api_Url+"Auth",data)
    .then((response)=>{
             setShowLoader(true);
          if(response.data.success==true)
        {
            let token= response.data.token;
            let User =response.data.name;
            localStorage.setItem("user-access",token);
            // Here user-access is the name of the property of token
            localStorage.setItem("name",User);
            setShowLoader(false);
            navigate("/");
        }
        else{
            if(response.data.errtype==1)
            {
                setErrMsg("This Username password is invalid");
            }
            else
            if(response.data.errtype==2)
            {
                 setErrMsg("This password is invalid");
            }
            else if(response.data.errtype==3)
              {
                setErrMsg("You Account is Deactivated");
           }
       }
     console.log(response.data);
      
    })
    
    }
})
  return (
    <>
<div className='Container' style={{minHeight: "600px", width:"600px"}}>
     {/* Form starts from here */}
     <div className='row'>
     <div className='col-md-6 offset-md-3'>
     <form onSubmit={Loginfrm.handleSubmit}>
     <div className='card my-5'>
     <div className='card-header'>
     <h3 className='text-aligb-centre'>User Login</h3>
     </div>
     <div className='card-body'>
     <div className='my-2'>
     <label>Email</label>
     <input type='text' name="email" onChange={Loginfrm.handleChange}  placeholder='Username'className={'form-control '+(Loginfrm.errors.email&&Loginfrm.touched.email ?"is-invalid":"")}/>
      {
      Loginfrm.errors.email && Loginfrm.touched.email
      ?
     <small className='text-danger'>{Loginfrm.errors.email}</small>
      :
       ""
      }
    </div>
        <div className='my-2'>
        <label>Password</label>
        <input type='password' name="password" onChange={Loginfrm.handleChange} placeholder='Enter Password' className={'form-control '+(Loginfrm.errors.password&&Loginfrm.touched.password ?"is-invalid":"")}/>
         {
           Loginfrm.errors.password && Loginfrm.touched.password
              ?
            <small className='text-danger'>{Loginfrm.errors.password}</small>
              :
              ""
             }
         </div>
    </div>
             <div className='card-footer'>
             <button type='submit'onChange={Loginfrm.handleChange} className='btn btn-success'>Login</button>
            <p className='test-danger text-center'></p>
             {
           errMsg
           ?
           errMsg
           :
            ""
           }
           {
            showLoader == true? 
           <span className='spinner-border-dark spinner-border-sm'></span>
             :
              ""
              }
      <p className='mt-2' >Create a new Account <span className='mr-2'></span>
      <NavLink to="/SignUP"><u>SignUp</u></NavLink>

  </p>
</div>
 </div>
 </form>
 </div>
 </div>

 {/* form ended */}
</div>

    </>
  )
}

export default Login