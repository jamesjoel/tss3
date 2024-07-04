import React from 'react'
import {NavLink} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="container" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card my-5 border-orange">
                    <div className="card-header bg-orange">
                        <h4 className='text-light mb-0'>User Registration</h4>
                        <small className='text-light'>If you are already registered <NavLink to='/login'>click here</NavLink></small>
                    </div>
                    <div className="card-body">
                        <div className='my-2'>
                            <label>Name</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Email</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Password</label>
                            <input type='password' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Re-Password</label>
                            <input type='password' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Address</label>
                            <textarea className='form-control' ></textarea>
                        </div>
                        <div className='my-2'>
                            <label>City</label>
                            <select className='form-control' >
                                <option>Select</option>
                                <option>Indore</option>
                                <option>Mumbai</option>
                            </select>
                        </div>
                        <div className='my-2'>
                            <label>Gender</label>
                            <br />
                            Male &nbsp;<input type='radio' name='gender'/>
                            &nbsp;&nbsp;&nbsp;
                            Female &nbsp;<input type='radio' name='gender'/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-orange'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup