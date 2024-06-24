import React, { useState } from 'react'

const Test5 = () => {

    let [disp, setDisp] = useState(true);

    let demo = ()=>{
        // setDisp(()=>{
        //     return disp==true ? false : true;
        // });
        setDisp(!disp);
    }

  return (
    <>
    <div className='container my-4'>
    <button onClick={demo} className='btn btn-success'>OK</button>
        {
            disp==true 
            ?
                <Box1 />
                :
                
                <Box2 />

        }


        
    </div>
    </>
  )
}


let Box1 = ()=>{
    return(
        <div style={{ height : "200px", width : "200px", backgroundColor : "#fd41dd"}}></div>
    )
}

let Box2 = ()=>{
    return(
        <div style={{ height : "200px", width : "200px", backgroundColor : "#704050"}}></div>
    )
}

export default Test5