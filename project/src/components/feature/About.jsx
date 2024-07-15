import React, {useState} from 'react'
import axios from 'axios'

const About = () => {
    
    let [pro, setPro] = useState([]);
    let [showSpinner, setShowSpinner] = useState(false)

    let getdata = ()=>{
        setShowSpinner(true)
        axios.get("https://fakestoreapi.com/products").then(response=>{
            setPro(response.data);
            setShowSpinner(false)
        })
    }
    

  return (
    <div className="container my-4" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-12">
                <button onClick={getdata} className='btn btn-info'>
                    Get Data 
                    {
                        showSpinner==true
                        ?
                        <span className='spinner-border spinner-border-sm'></span>
                        :
                        ''
                    }
                </button>
                {
                    pro.length == 0
                    ?
                    <div className='alert alert-info my-3'>No Data Found !</div>
                    :
                    <table className="table table-dark my-4">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pro.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{ index+1 }</td>
                                        <td>{ item.title }</td>
                                        <td>{ item.price }</td>
                                        <td>{ item.category }</td>
                                        <td><img src={ item.image } style={{height : "100px", width : "100px"}}/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                }
            </div>
        </div>
    </div>
  )
}

export default About