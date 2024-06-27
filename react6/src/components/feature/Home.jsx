import React from 'react'

const Home = () => {

  let arr = ["indore", "mumbai", "pune", "delhi"];
  let data = ["red", "green", "blue", "yellow", "pink", "white"]

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Home Page</h1>
          {
            arr.map(demo=><h1>{demo}</h1>)
          }

          {
            data.map((item, x)=>{
              return(
                <h3> {x+1} {item}</h3>
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Home