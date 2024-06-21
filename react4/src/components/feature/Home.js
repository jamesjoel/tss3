import React from 'react'

const obj = {
  name : "purvi"
}

let color = "green";


const Home = () => {
  
  let a = "rohit";
  let b = 100;
  let c = ["indore", "mumbai", "pune"];


  let style = {
    backgroundColor : color
  }

  
  return (
    <>
    
    <h1>Home Page</h1>

    <h1>{obj.name}</h1>

    <h2>{ a }</h2>

    <h3> { b }</h3>
    <h3> { c[0] }</h3>
    <h3> { c[1] }</h3>
    <h3> { c[2] }</h3>

    <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident aspernatur ratione eos necessitatibus voluptatum eius, recusandae quasi. Ea libero voluptatem, nulla a architecto eveniet accusantium laborum repudiandae aliquid obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a aliquid dolorum eos laudantium fugit quam nam quo blanditiis autem tenetur totam, atque, dolore vero, numquam necessitatibus officia modi minus.</p>
    </>
  )

}

export default Home
