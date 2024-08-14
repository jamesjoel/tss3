import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import {useFormik} from 'formik'
import ProductSchema from '../../../schema/ProductSchema'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  let photo = useRef();
  let navigate = useNavigate();
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
    validationSchema : ProductSchema,
    initialValues : {
      title : "",
      price : "",
      category : "",
      subcategory : "",
      detail : "",
      discount : "",
      quantity : "",
      image : ""

    },
    onSubmit : (data)=>{
      // console.log(photo);
      let myform = new FormData();
      myform.append("image", photo.current.files[0]);
      
      myform.append("title", data.title);
      myform.append("price", data.price);
      myform.append("discount", data.discount);
      myform.append("category", data.category);
      myform.append("subcategory", data.subcategory);
      myform.append("detail", data.detail);
      myform.append("quantity", data.quantity);
      
      console.log(myform)
      axios.post(API_URL+"/product", myform).then(response=>{
        navigate("/admin/product")
        // console.log(response.data)

      })
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
            <input name='title' onChange={ProFrm.handleChange} type='text' className={'form-control ' + (ProFrm.errors.title && ProFrm.touched.title ? 'is-invalid' : '')} />
          </div>
          <div className='my-2'>
            <label>Product Price</label>
            <input name='price' onChange={ProFrm.handleChange} type='text' className={'form-control ' + (ProFrm.errors.price && ProFrm.touched.price ? 'is-invalid' : '')} />
          </div>

          <div className='my-2'>
            <label>Product Image</label>
            <input ref={photo} name='image' type='file' onChange={ProFrm.handleChange} className={'form-control ' + (ProFrm.errors.image && ProFrm.touched.image ? 'is-invalid' : '')} />
          </div>
          <div className='my-2'>
            <label>Product Category</label>
            <select name='category' onChange={(e)=>{getSubCate(e); ProFrm.handleChange(e)}} className={'form-control ' + (ProFrm.errors.category && ProFrm.touched.category ? 'is-invalid' : '')} >
              <option>Select Category</option>
              {
                allCate.map(item=><option key={item._id}>{item.name}</option>)
              }
            </select>
          </div>
          <div className='my-2'>
            <label>Product Sub-Category <small>(Please Select Category First)</small></label>
            <select name='subcategory' onChange={ProFrm.handleChange} className={'form-control ' + (ProFrm.errors.subcategory && ProFrm.touched.subcategory ? 'is-invalid' : '')} >
              <option>Select Sub-Category</option>
              {
                allSubCate.map(item=><option key={item._id}>{item.name}</option>)
              }
            </select>
          </div>
          <div className='my-2'>
            <label>Product Detail</label>
            <textarea name='detail' onChange={ProFrm.handleChange} className={'form-control ' + (ProFrm.errors.detail && ProFrm.touched.detail ? 'is-invalid' : '')} ></textarea>
          </div>
          <div className='my-2'>
            <label>Product Discount</label>
            <div className='input-group'>
            <input name='discount' onChange={ProFrm.handleChange} type='text' className={'form-control ' + (ProFrm.errors.discount && ProFrm.touched.discount ? 'is-invalid' : '')} />
            <div className='input-group-append'>
              <span className='input-group-text'>%</span>
            </div>
            </div>
          </div>
          <div className='my-2'>
            <label>Product Quantity</label>
            <input name='quantity' onChange={ProFrm.handleChange} type='text' className={'form-control ' + (ProFrm.errors.quantity && ProFrm.touched.quantity ? 'is-invalid' : '')} />
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