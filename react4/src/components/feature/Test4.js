import React, {useState} from 'react'
// useState()  --- Hooks ---- the hooks are pre-defined special fun in react

const Test4 = () => {
    /*
    let data = useState(200);
    let a = data[0]; // its look like a = 100
    let b = data[1]; // its a function for update the value of "a"
    */

    let [a, setA] = useState(200);
    let b = false;

    let [num, setNum] = useState(0)


    let demo = ()=>{
        setA(()=>{
            if(b==true){
                return 500;
            }
            else{
                return 600;
            }
        })
    }

    let inc = ()=>{
        setNum(()=>{
            let x = num+1;
            return x;
        })
    }

    
    let dec = ()=>{
        setNum(()=>{
            let x = num-1;
            return x;
        })

    }


  return (
    <>
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h1>Welcome</h1>
                <h1>{a}</h1>
                <br />
                <button onClick={demo} className='btn btn-info'>OK</button>
                <br />
                <br />

                <button onClick={inc} className='btn btn-success'>+</button> 
                    <b className='h1'>{num}</b> 
                <button onClick={dec} className='btn btn-danger'>-</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Test4