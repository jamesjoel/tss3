import React, {useState, useEffect} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import ProductSchema from "../../../Schema/ProductsSchema"
import axios from 'axios'
import Api_Url from '../../../constants/Api_Url'
import "../../../../src/Admin.css"

const Products = () => {
  let navigate = useNavigate();
  let [cate, setCate] = useState([]);
  let [subcate, setSubCate] = useState([]);

  let [showLoader, setShowLoader] = useState(false)



  useEffect(()=>{
    axios.get(Api_Url+"Category")
    .then(response=>{
      setCate(response.data);
    })
  },[])



  let proForm = useFormik({
    validationSchema : ProductSchema,
    onSubmit : (formData)=>{
      setShowLoader(true)
      axios.post(Api_Url="Product", formData)
      .then((response)=>{
        setShowLoader(false)
        navigate("/Admin/Product")
      })
      .catch(err=>{
        
      })
    },
    initialValues : {
      title : "",
      price : "",
      category : "",
      subcategory : "",
      detail : "",
      discount : "",
      quantity : "",
    }
  })


  let getSubCate = (event)=>{
    let a = event.target.value;
    axios.get(Api_Url+"/SubCategory/findbycategory/"`${a}`)
    .then(response=>{
      setSubCate(response.data)
    })
  }

  return (
    <>
    {
      showLoader 
      ?
      <div className='overlay'>
      <div className='preloader'></div>
    </div>
    :
    ''
    }
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <form onSubmit={proForm.handleSubmit}>
          <div className="card">
            <div className="card-header bg-dark">
                      <h5 className='text-light'>Add New Product</h5>
                  </div>
            <div className="card-body">
                <div className='my-2'>
                  <label className='mb-2'>Title</label>
                  <input type='text' name='title' onChange={proForm.handleChange} className={'form-control '+(proForm.errors.title && proForm.touched.title ? 'is-invalid' : '')} />
                </div>
                
                <div className='my-2'>
                  <label className='mb-2'>Price</label>
                  <input type='text' name='price' onChange={proForm.handleChange} className={'form-control '+(proForm.errors.price && proForm.touched.price ? 'is-invalid' : '')} />
                </div>
                <div className='my-2'>
                  <label className='mb-2'>Category</label>
                  <select type='text' name='category' onChange={(e)=>{getSubCate(e); proForm.handleChange(e)}} className={'form-control '+(proForm.errors.category && proForm.touched.category ? 'is-invalid' : '')} >
                    <option>Select</option>
                    {
                      cate.map(item=><option key={item._id}>{item.name}</option>)
                    }
                  </select>
                </div>
                <div className='my-2'>
                  <label className='mb-2'>Sub-Category</label>
                  <select type='text' name='subcategory' onChange={proForm.handleChange} className={'form-control '+(proForm.errors.subcategory && proForm.touched.subcategory ? 'is-invalid' : '')} >
                    <option>Select</option>
                    {
                      subcate.map(item=><option key={item._id}>{item.name}</option>)
                    }
                  </select>
                </div>
                <div className='my-2'>
                  <label className='mb-2'>Quantity</label>
                  <input type='text' name='quantity' onChange={proForm.handleChange} className={'form-control '+(proForm.errors.quantity && proForm.touched.quantity ? 'is-invalid' : '')} />
                </div>
                <div className='my-2'>
                  <label className='mb-2'>Detail</label>
                  <textarea type='text' name='detail' onChange={proForm.handleChange} className={'form-control '+(proForm.errors.detail && proForm.touched.detail ? 'is-invalid' : '')} ></textarea>
                </div>
                <div className='my-2'>
                  <label className='mb-2'>Discount</label>
                  <input type='text' name='discount' onChange={proForm.handleChange} className={'form-control '+(proForm.errors.discount && proForm.touched.discount ? 'is-invalid' : '')} />
                </div>
            </div>
            <div className="card-footer">
              <button type='submit' className='btn btn-success'>Submit</button>
            </div>
            </div>
        </form>

        </div>
      </div>
    </div>
    </>
  )
}

export default Products