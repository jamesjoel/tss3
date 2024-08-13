import React, {useState} from 'react'

const Event3 = () => {

  let [path, setPath] = useState('images/1.jpg');
  let [type, setType] = useState("password")
  let [lable, setLable] = useState((<i class="fa fa-eye" aria-hidden="true"></i>))


  

  let demo = (x)=>{
    setPath(x);
  }

  let demo2 = ()=>{
    if(type=="password"){
      setType("text");
      setLable((<i class="fa fa-eye-slash" aria-hidden="true"></i>))
    }
    if(type=="text"){
      setType("password")
      setLable((<i class="fa fa-eye" aria-hidden="true"></i>))
    }
  }
  return (
    <div className="container my-4">
      
      <div className="row">
        <div className="col-md-8 offset-md-2">
            <div className='input-group'>
              
              <input type={type} className='form-control'/>


              <button onClick={demo2} className='btn btn-primary'>
                {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                {lable}
              </button>

            </div>
          <br />
          <br />
            <h4 className='text-center'>Product Image</h4>
            <img src={path} style={{height : "600px"}} className='img-thumbnail' />
            <br />
            <div className='row'>
              <div className='col-md-3'>
                <img onMouseOver={()=>demo('/images/1.jpg')} src='/images/1.jpg' className='img-thumbnail' style={{height : "150px"}} />
              </div>
              <div className='col-md-3'>
              <img onMouseOver={()=>demo('/images/2.jpg')} src='/images/2.jpg' className='img-thumbnail' style={{height : "150px"}}/>
              </div>
              <div className='col-md-3'>
              <img onMouseOver={()=>demo('/images/3.jpg')} src='/images/3.jpg' className='img-thumbnail' style={{height : "150px"}}/>
              </div>
              <div className='col-md-3'>
              <img onMouseOver={()=>demo('/images/4.jpg')} src='/images/4.jpg' className='img-thumbnail' style={{height : "150px"}}/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Event3
/*
  <p onDoubleClick={ demo }>      this is simple fn calling
  
  <p onDoubleClick={()=> demo(100) }>   this is a para fn calling
  
  
  <p onDoubleClick={(event)=> demo(event) }>   this is getting event object and pass into our fn




*/