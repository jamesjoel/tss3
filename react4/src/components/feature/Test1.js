import React, {useState} from 'react'

const Test1 = () => {

    let [color1, setColor1] = useState("gray");

    let demo1 = ()=>{
        setColor1("green");
    }
    let demo2 = ()=>{
        setColor1("blue")
    }
    let demo3 = ()=>{
        setColor1("red")
    }
  return (
    <>
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <div>

                <button onClick={ demo1 } className='btn btn-success'>Green</button>
                <button onClick={ demo2 } className='btn btn-primary'>Blue</button>
                <button onClick={ demo3 } className='btn btn-danger'>Red</button>
                </div>
                <br />
                <div style={{ height : "200px", width : "200px", backgroundColor : color1 }}></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Test1