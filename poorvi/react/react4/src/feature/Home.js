import React from 'react'

const Home = () => {
    /*we can write jsx code for initializing a variable here and the scope of that particular variable will unnder this component only we can use it under this component with syntax
    <tag name>{variable name}</tag name> here variable name is a memory location in array we can write it with index number
    */
   let a="home"
  return (<> <h1>{a}</h1>
  <p>lorem</p></>


  )
}

export default Home