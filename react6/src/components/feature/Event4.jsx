import React, {useState} from 'react'

const Event4 = () => {

    let [x, setX] = useState("");

    let [c1, setC1] = useState("white")
    let [c2, setC2] = useState("white")


    let demo = (event)=>{
        // console.log(event.target.value)
    }
    let demo2 = ()=>{
        console.log("$$$$$$$")
    }
    let demo3 = (event)=>{
        setX(event.target.value)
    }
    let demo10 = ()=>{
        setC1("yellow");
    }
    let demo11 = ()=>{
        setC1("pink");
    }
    let demo20 = ()=>{
        setC2("yellow");
    }
    let demo21 = ()=>{
        setC2("pink");
    }

    let demo22 = ()=>{
        console.log("**********")
    }

    let demo12=(event)=>{
        event.preventDefault();
    }

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h1>{x}</h1>
                <input onPaste={(event)=>demo12(event)} type='text' onFocus={demo10} onBlur={demo11} style={{backgroundColor : c1}} onKeyUp={demo2} onKeyDown={(event)=>demo(event)}/>
                <br />
                <br />
                <input onCopy={demo22} type='text' onFocus={demo20} onBlur={demo21} style={{backgroundColor : c2}} onChange={(event)=>demo3(event)} />
                <br />
                <br />

            </div>
        </div>
    </div>
  )
}

export default Event4