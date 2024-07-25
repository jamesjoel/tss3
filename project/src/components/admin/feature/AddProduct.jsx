import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import {useFormik} from 'formik'
const AddProduct = () => {
  let [allCate, setAllCate] = useState([]);
  let [allSubCate, setAllSubCate] = useState([]);

  useEffect(()=>{
    axios.get(API_URL+"/category").then(response=>{
        setAllCate(response.data);
    })
  },[])
  useEffect(()=>{
    // axios.get(API_URL+"/subcategory").then(response=>{
    //     setAllSubCate(response.data);
    // })
  },[])

  let ProFrm = useFormik({
    initialValues : {
      title : "",
      price : "",
      category : "",
      subcategory : "",
      detail : "",
      discount : "",
      quantity : ""

    },
    onSubmit : (data)=>{
      console.log(data);
    }
  })


  let getSubCate = (e)=>{
      let a = e.target.value;
      axios.get(API_URL+"/subcategory/"+a).then(response=>{
        setAllSubCate(response.data);
    })
  }
  return (
    <div className="container my-4">
        <form onSubmit={ProFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h4>Add New Product</h4>
          <div className='my-2'>
            <label>Product Title</label>
            <input name='title' onChange={ProFrm.handleChange} type='text' className='form-control' />
          </div>
          <div className='my-2'>
            <label>Product Price</label>
            <input name='price' onChange={ProFrm.handleChange} type='text' className='form-control' />
          </div>
          {/* <div className='my-2'>
            <label>Product Image</label>
            <input type='text' className='form-control' />
          </div> */}
          <div className='my-2'>
            <label>Product Category</label>
            <select name='category' onChange={(e)=>{getSubCate(e); ProFrm.handleChange(e)}} className='form-control' >
              <option>Select Category</option>
              {
                allCate.map(item=><option key={item._id}>{item.name}</option>)
              }
            </select>
          </div>
          <div className='my-2'>
            <label>Product Sub-Category <small>(Please Select Category First)</small></label>
            <select name='subcategory' onChange={ProFrm.handleChange} className='form-control' >
              <option>Select Sub-Category</option>
              {
                allSubCate.map(item=><option key={item._id}>{item.name}</option>)
              }
            </select>
          </div>
          <div className='my-2'>
            <label>Product Detail</label>
            <textarea name='detail' onChange={ProFrm.handleChange} className='form-control' ></textarea>
          </div>
          <div className='my-2'>
            <label>Product Discount</label>
            <div className='input-group'>
            <input name='discount' onChange={ProFrm.handleChange} type='text' className='form-control' />
            <div className='input-group-append'>
              <span className='input-group-text'>%</span>
            </div>
            </div>
          </div>
          <div className='my-2'>
            <label>Product Quantity</label>
            <input name='quantity' onChange={ProFrm.handleChange} type='text' className='form-control' />
          </div>

          <br />
          <button type='submit' className='btn btn-success'>Add</button>
          


        </div>
      </div>
        </form>
    </div>
  )
}

export default AddProduct



/*

  onClick={ demo }

  onClick = {()=> demo }

*/