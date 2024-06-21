import React, {useState} from 'react'

const Test3 = () => {

    let [img, setImg] = useState('/assets/images/1.jpg')

    let demo1 = ()=>{ setImg('/assets/images/1.jpg') }
    let demo2 = ()=>{ setImg('/assets/images/2.jpg') }
    let demo3 = ()=>{ setImg('/assets/images/3.jpg') }
    let demo4 = ()=>{ setImg('/assets/images/4.jpg') }
    let demo5 = ()=>{ setImg('/assets/images/5.jpg') }

  return (
    <div className='container-fluid' style={{ height : "600px", backgroundSize : "100% 100%", backgroundImage : `url('${img}')` }}>
        <div className='container py-4'>
            <div className='row'>
                <div onClick={demo1} className='col-md-2 m-1 border border-3 border-dark' style={{ height : "100px", backgroundSize : "100% 100%", backgroundImage : "url('/assets/images/1.jpg')"}}></div>
                <div onClick={demo2} className='col-md-2 m-1 border border-3 border-dark' style={{ height : "100px", backgroundSize : "100% 100%", backgroundImage : "url('/assets/images/2.jpg')"}}></div>
                <div onClick={demo3} className='col-md-2 m-1 border border-3 border-dark' style={{ height : "100px", backgroundSize : "100% 100%", backgroundImage : "url('/assets/images/3.jpg')"}}></div>
                <div onClick={demo4} className='col-md-2 m-1 border border-3 border-dark' style={{ height : "100px", backgroundSize : "100% 100%", backgroundImage : "url('/assets/images/4.jpg')"}}></div>
                <div onClick={demo5} className='col-md-2 m-1 border border-3 border-dark' style={{ height : "100px", backgroundSize : "100% 100%", backgroundImage : "url('/assets/images/5.jpg')"}}></div>
                
            </div>
        </div>
    </div>
  )
}

export default Test3