import React from 'react'

const About = () => {

  let a = "rohit";

  let user = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "amar",
      age : 30,
      city : "pune"
    },
    {
      name : "vijay",
      age : 21,
      city : "mumbai"
    }
  ];

  // let arr = ["", "", "", ""]
  let arr = Array.from({ length : 100 });

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <table className='table table-dark table-bordered table-striped table-hover'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((item, index)=>{
                  return(
                    <tr>
                      <td>{ index+1 }</td>
                      <td>{ item.name }</td>
                      <td>{ item.age }</td>
                      <td>{ item.city }</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          {
            arr.map((item, index)=>{
              return(
                <h4>{ index+1 }</h4>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About