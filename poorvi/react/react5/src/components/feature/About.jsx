import React from 'react'

const About = () => {
  let user=[
    {
       name : "pooorvi"
       , age: 21,
       city:"indore"
    },
    {
      name :"priya"
      , age: 24
    },
  ]
    
  return (
    <>
    <div className='container my-4'>
      <div className='row'>
        <div className='col-md-12'>
          < table className='table table-dark table-borderd table-striped table-hover'>
          <thead>
            <tr>
              <th>s.no</th>
              <th>name</th>
              <th>age</th>
            </tr>
            <tbody>
              {
                user.map((item,x)=>{
                  return( <tr>
                  <td>{x+1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  </tr>  

                  )
 })
              }
            </tbody>
          </thead>
          </table>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default About