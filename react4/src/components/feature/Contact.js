import React, {useState} from 'react'

const Contact = () => {

    // let a = 100;

    let [a, setA] = useState(500);

    let [name, setName] = useState("rohit");

    let demo = ()=>{
        setA(1000);
        console.log("*************");
    }

    let demo2 = ()=>{
        setName("Vipul")
    }

  return (
    <>
        <div>Contact</div>
        <h1>{a}</h1>
        <button onClick={ demo } className='btn btn-primary'>OK</button>
        <h1>{name}</h1>
        <button onClick={ demo2 } className='btn btn-danger'>Change Name</button>
    </>
  )
}

export default Contact

/*
    <button onClick = {  setName }


*/