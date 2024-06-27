import React from 'react'
import { useState } from 'react'

const Contact = () => {
  /* we make arrow function over return because we cant make arrow function on our jsx*/
  /*let demo= ()=>{
    console.log("****")
    this console log wil only be visible only  at inspect console */

     let[Number,setNumber]=useState(100);
    /*  here the number is taking value from one parameter passed in use state  and set number is a fuction which will set the value of number and set it or rename it
   */
let[Name , setName]=useState("POORVI");
   let demo=()=>{
    setNumber(1000);
   }
   let demo2=()=>{
    setName("priya")
   }


  return (
    <>
  
    <div>Contact</div>
    <h1>{Number}</h1>
    <button onClick={demo} className='btn btn-primary'>OK</button>
    {/* here on click is a even that will show same property with any tag */}
    <h1>{Name}</h1>
    <button onClick={demo2} className='btn btn-danger'>set</button>
    </>
  )
}

export default Contact

