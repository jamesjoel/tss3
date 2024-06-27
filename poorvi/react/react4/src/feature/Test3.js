
import React ,{useState} from 'react'

const Test3 = () => {
    let [a,setA]=useState(200)
    let b=true;
// if we do have multiple line of codes due to conditions we do write a callback function in setA function
    let demo = ()=>{
        setA( ()=>{
           return b=true? 500:600;
           
        })
        }
   
     let [num,setValue]= useState(0);
         
    let inc =()=>{
        setValue( ()=>{
            let x=num+1;
            return x;

        }
        )
    }
    let dec = ()=>
        {
            setValue(()=>{
                let x=num-1;
                return x;
            })
        }

        let [color,setColor]=useState(true);
          let demo2 =()=>{
            setColor(()=>{
               return color=true?false:true; 
            })
          }
          
        //we can right this as  setColor(!color);   


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h1>{a}</h1>
                <button onClick={demo} className='btn btn-success'>setA</button>
                <br></br>
                <br></br>                    
                <button onClick={inc} className='btn btn-success'>+</button>
                  <b>{num}</b>
                <button onClick={dec} className='btn btn-danger'>-</button>
                 </div>

                
        </div>
        <button onClick={demo2} className='btn btn-sucess'>setColor</button>
        {
        color=true?
        <div className='container my-4' style={{height:"200px" ,width:"200px",backgroundColor:"beige"}}></div>
        :
        <div className='container my-4' style={{height:"200px" ,width:"200px",backgroundColor:"pink"}}></div>
}
    </div>

  )
}

export default Test3