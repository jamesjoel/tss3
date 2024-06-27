import React from 'react'

const Home = () => {
  let arr=["indore","katni","seoni"];
  let arr2=["red","pink","blue"];
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
         <h1>
          Home page
          {
            arr.map((demo)=>{
//arrayname.map funtion or loop then any named parameter
               return(
                <h1>{demo} </h1>
              )
                   })
          }
          {
           arr2.map((item,x)=>{
            return(
              <h1>{ x+1}{item}</h1>
            )
           }
          )
// here if we do pass second parameter then will save the index of content of first one//



          }
         </h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home