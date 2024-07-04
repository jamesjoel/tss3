import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card my-5 border-orange">
                    <div className="card-header bg-orange">
                        <h4 className='text-light mb-0'>User Login</h4>
                        <small className='text-light'>If you are a new customer <NavLink to='/signup'>click here</NavLink></small>
                    </div>
                    <div className="card-body">
                        <div className='my-2'>
                            <label>Email</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Password</label>
                            <input type='password' className='form-control' />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-orange'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login