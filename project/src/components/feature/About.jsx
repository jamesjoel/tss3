import React, {useState} from 'react'
import axios from 'axios'
const About = () => {
    
    let [arr, setArr] = useState([]);
    let [loader, setLoader] = useState(false)

    let handleClick = ()=>{
        setLoader(true);
        axios.get("http://localhost:3000/api/product").then((response)=>{
            console.log(response.data)
            setArr(response.data);
            setLoader(false)
        })
    }


  return (
    <div className="container my-4" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-12">
            {
                loader==true
                ?
                <div class="loader">
                <div class="loader-inner">
                    <div class="circle"></div>
                </div>
                </div>
                :
                ''

            }


                <button onClick={handleClick} className='btn btn-info'>OK 
                    {
                        loader==true 
                        ?  
                        <span className='spinner-border spinner-border-sm'></span> 
                        :
                        ''
                    }
                    
                </button>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>



            </div>
        </div>
    </div>
  )
}

export default About