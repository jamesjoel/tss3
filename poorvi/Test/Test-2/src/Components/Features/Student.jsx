import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom';
const Student = () => {
  let [allStudent,setAllStudent]=useState([]);
useEffect(()=>
{
  axios.get('http://localhost:3000/Student').then(response=>{
      //  console.log(response.data)
       setAllStudent(response.data);
  })
  
},[]
)
let [selStudent, setStudent]=useState([]);

  return (
    <>
    <div className='conatiner'>
      <div className='row'>
        <div className='col-md-8 offset-2'>
         <NavLink className= "btn btn-info" to='/Add/Student'>Add Student</NavLink>
         <table className='table table-dark table-bordered'>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name </th>
              <th>Fees</th>
              <th>City</th>
              <th>Address</th>
              <th>Class</th>
              <th>Delete</th>
           </tr>
          </thead>
          <tbody>
            {
              allStudent.map((item,index)=>{
                return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.Name}</td>
                    <td>{item.Fees}</td>
                    <td>{item.City}</td>
                    <td>{item.Address}</td>
                    <td>{item.class}</td>
                    <td><button data-bs-toggle='modal'data-bs-target='#idmodal' className='btn btn-danger'>Delete</button></td>
                    {/* here object name shouls be according to the name given in database and also caase sensitive */}
                  </tr>
                )
              })
            }
          </tbody>
          
          </table> 
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
    
    <div className='modal' id="idmodal">
      <div className='modal-content'>
          
        <div className='modal-header'>
          <h3>Delete</h3>
        </div>
          
          <div className='modal-body'>
            <p>Are you sure you want to delete?</p>
          </div>
        
          <div className='modal-footer'>
            <button className='btn btn-danger' data-bs-dismis="idmodal">Delete</button>
            <button className='btn btn-info' data-bs-dismis="idmodal">Close</button>
          </div>
        </div>
      
      </div>
      </div>
      </div>
      </div>
      

      

    </>
  )
}

export default Student