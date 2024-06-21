import React, {useState} from 'react'

const Test2 = () => {

    let [bgColor, setBgColor] = useState("#ccc");

    let demo1 = ()=>{ setBgColor("#FF5733") }
    let demo2 = ()=>{ setBgColor("#31DE53") }
    let demo3 = ()=>{ setBgColor("#23ADC2") }
    let demo4 = ()=>{ setBgColor("#7023C2") }
    let demo5 = ()=>{ setBgColor("#C223A3") }

  return (
      
    <div className='container-fluid' style={{ height : "700px", backgroundColor : bgColor}}>
        <div className='container py-4'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <div className='row'>
                        <div onClick={demo1} className="col-md-2 m-1 border border-3 border-dark" style={{height : "100px", backgroundColor : "#FF5733"}}></div>
                        <div onClick={demo2} className="col-md-2 m-1  border border-3 border-dark" style={{height : "100px", backgroundColor : "#31DE53"}}></div>
                        <div onClick={demo3} className="col-md-2 m-1  border border-3 border-dark" style={{height : "100px", backgroundColor : "#23ADC2"}}></div>
                        <div onClick={demo4} className="col-md-2 m-1  border border-3 border-dark" style={{height : "100px", backgroundColor : "#7023C2"}}></div>
                        <div onClick={demo5} className="col-md-2 m-1 border border-3 border-dark" style={{height : "100px", backgroundColor : "#C223A3"}}></div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Test2