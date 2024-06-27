import React from 'react'
import{useState} from 'react'
const Test2 = () => {
    let[Color ,setColor]=useState("#fff");
    let demo1=()=>{
        setColor("#6B1907");
    }
    let demo2=()=>{
        setColor("#38CFD9");
    }
    let demo3=()=>{
        setColor("#0A3F42");
    }
    let demo4=()=>
        {
            setColor("#690D6D");
        }


  return (
<div className='container-fluid '  style={{height : "700px" }}>
    <div className='container py-4'>
        <div className='row'>
            <div className='col-md-8  offset-md-2'>
                <div className='row'>
                <div  onClick={demo1}  className='col-md-2 m-1 border border-dark border-2'  style={{height:"100px" ,backgroundColor:"#6B1907"}}></div>
                <div  onClick={demo2}  className='col-md-2 m-1 border border-dark border-2'  style={{height:"100px",backgroundColor:"#38CFD9"}}></div>
                <div  onClick={demo3}  className='col-md-2  m-1 border border-dark border-2'  style={{height:"100px",borderColor:"#0A3F42"}}></div>
                <div  onClick={demo4}   className='col-md-2 m-1 border border-dark border-2 '  style={{height:"100px",borderRightColor:"#690D6D"}}></div>
                </div>
            </div> 
        </div>
    </div>
</div>
  )
}

export default Test2