import React, {useState} from 'react'

const Event2 = () => {

    let [m, setM] = useState(0) // left
    let [n, setN] = useState(200) // top


    let demo = ()=>{
      let x = Math.random()*600;
      let y = Math.floor(x);

      let a = Math.random()*1200;
      let b = Math.floor(a);

      setN(y);
      setM(b);
      
    }

    let demo2 = ()=>{
        setN(0);
        setTimeout(()=>{
            setN(200)
        }, 500)
        
    }
  return (
    // <div onMouseOver={demo} style={{ height : "100px", width : "100px", backgroundColor : "#000", borderRadius : "50px", marginLeft : m+"px", marginTop : n+"px"}}></div>
    <div onClick={demo2}  style={{ height : "100px", width : "100px", backgroundColor : "#000", borderRadius : "50px", marginLeft : m+"px", marginTop : n+"px", transition : ".5s"}}></div>
  )
}

export default Event2