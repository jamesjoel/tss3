import React from 'react'
import { useState } from 'react'

const Test = () => {
  let [Color,setColor]=useState("black");
  let demo1=()=>
    {
setColor("green");
    }
    let demo2=()=>
      {
  setColor("blue");
      }
      let demo3=()=>
        {
    setColor("red");
        }
        
  return (
    <>
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <div>
          <button  onClick={demo1} className='btn-btn-sucess'>Green</button>
         
          <button  onClick={demo2} className='btn-btn-primary'>Blue</button>
          
          <button  onClick={demo3} className='btn-btn-danger'>Red</button>
          </div>
          <br/>
          <div style={{ height : "200 px",width: "200 px",backgroundColor:Color}}> </div>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Test
