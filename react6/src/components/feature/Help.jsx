import React, {useState} from 'react'

const Help = () => {
  let [x, setX] = useState(0)
  let [y, setY] = useState(0)

  let demo = (event)=>{
    console.log(event)
  }  
  
  let demo2 = (event)=>{
    console.log(event)
    event.preventDefault();
  }

  let demo3 = (event)=>{
    setX(event.clientX);
    setY(event.clientY);
  }

  return (
    <div onContextMenu={(event)=>demo2(event)} className="container my-5">
        <div className="row">
            <div className="col-md-12">
                {/* <button  onClick={demo} className='btn btn-info'>OK</button> */}
                <button  onClick={(e)=> demo(e)} className='btn btn-info'>OK</button>
                
                <div onContextMenu={(event)=>demo2(event)} style={{height : "300px", width : "300px", backgroundColor : "red"}}></div>
                <br />
                <br />
                <h3>X : {x}, Y : {y}</h3>
                <div onMouseMove={(event)=>demo3(event)} style={{height : "400px", width : "800px", backgroundColor : "#704010"}}></div>
            </div>
        </div>
    </div>
  )
}

export default Help
/*

  let demo = (a, b)=>{
  
  }

  

  <button onClick={demo}>
  
  
  <button onClick={()=> demo(5, 10) }>



  onClick={ (event)=> demo(event) }

  event==== event.preventDefault


*/