import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik} from 'formik'
import * as YUP from  'yup'
const Login = () =>{
    const LoginfrmSchema=YUP.object(
        {
         email:YUP.string().required("Insert valid email-id"),
         password:YUP.string().required("Insert valid password")
        }
    );
    const Loginfrm=useFormik({
        validateSchema:LoginfrmSchema,
        initialvalues:{
            email:""
            ,password:""
        }
  ,onSubmit:(data)=>{
    console.log(data);
    }
})
  return (
    <>
      <div className='Container' style={{minHeight: "600px", width:"600px"}}>
                <form onSubmit={Loginfrm.handleSubmit}>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card my-5'>
                    <div className='card-header'>
                        <h3 className='text-aligb-centre'>User Login</h3>
                    </div>
                    <div className='card-body'>
                        <div className='my-2'>
                            <lable>Email</lable>
                           
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
                            <lable>Passsword</lable>
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
                     <p className='mt-2' >Create a new Account <span className='mr-2'></span>
                    <NavLink to="/SignUP"><u>SignUp</u></NavLink>

                     </p>
                     </div>
                </div>
            </div>
        </div>
                </form>
    </div>

    </>
  )
}

export default Login