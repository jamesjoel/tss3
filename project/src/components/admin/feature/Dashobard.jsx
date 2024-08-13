import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const Dashobard = () => {

  let navigate = useNavigate();

  useEffect(()=>{

    if(! localStorage.getItem("admin-access-token"))
    {
      navigate("/admin"); // admin login route
    }

  },[])
  


  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-3'>
          <div className='card my-2'>
            <div className='card-body bg-red rounded'>
              <h4 className='m-0 text-light'>Users</h4>
              <h5 className='m-0 text-light'>21</h5>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card my-2'>
            <div className='card-body bg-green rounded'>
              <h4 className='m-0 text-light'>Product</h4>
              <h5 className='m-0 text-light'>21</h5>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card my-2'>
            <div className='card-body bg-blue rounded'>
              <h4 className='m-0 text-light'>Category</h4>
              <h5 className='m-0 text-light'>21</h5>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card my-2'>
            <div className='card-body bg-yellow rounded'>
              <h4 className='m-0'>Sub-Category</h4>
              <h5 className='m-0'>21</h5>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card my-2'>
            <div className='card-body bg-purple rounded'>
              <h4 className='m-0 text-light'>Orders</h4>
              <h5 className='m-0 text-light'>21</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashobard