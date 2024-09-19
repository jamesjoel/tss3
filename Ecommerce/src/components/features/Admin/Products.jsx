import React, {useState, useEffect,useRef} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import ProductSchema from "../../../Schema/ProductsSchema"
import axios from 'axios'
import Api_Url from '../../../constants/Api_Url'


const Products = () => {

  let photo=useRef();

  let navigate = useNavigate();
  let [cate, setCate] = useState([]);
  let [subcate, setSubCate] = useState([]);

 



  useEffect(()=>{
    axios.get(Api_Url+"Category")
    .then(response=>{
      setCate(response.data);
    })
  },[])



  let proForm = useFormik({
    validationSchema : ProductSchema,
    onSubmit : (formData)=>{
      // console.log(photo.current.files[0])
      let myfile=photo.current.files[0];
      let myForm= new FormData();
      // make sure the first variavle under append should same as our schema name
      myForm.append("uploadedimage",myfile);
      myForm.append("title",formData.title);
      myForm.append("price",formData.price);
      myForm.append("category",formData.category);
      myForm.append("subcategory",formData.subcategory);
      myForm.append("detail",formData.detail);
      myForm.append("discount",formData.discount);
      myForm.append("quantity",formData.quantity);
// here we are not taking image tag because  only name of image will go to db threw formik
      axios.post(Api_Url+"Product", myForm)
      .then((response)=>{
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
    axios.get(`${Api_Url}SubCategory/findbycategory/${a}`)
    .then(response=>{
      setSubCate(response.data)
    })
  }

  return (
    <>
    
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
                  <label className='mb-2'>Select Product Image</label>
                  <input type='file' ref={photo} name='image' onChange={proForm.handleChange} className={'form-control '+(proForm.errors.image && proForm.touched.image ? 'is-invalid' : '')} />
                </div>
                <div className='my-2'>
                  <label className='mb-2'>Category</label>
                  <select type='text' name='category' onChange={(e)=>{getSubCate(e); proForm.handleChange(e)}} className={'form-control '+(proForm.errors.category && proForm.touched.category ? 'is-invalid' : '')} >
                    <option>Select</option>
                    {
                      cate.map(item=><option key={item._id}>{item.category}</option>)
                    }
                  </select>
                </div>
                <div className='my-2'>
                  <label className='mb-2'>Sub-Category</label>
                  <select type='text' name='subcategory' onChange={proForm.handleChange} className={'form-control '+(proForm.errors.subcategory && proForm.touched.subcategory ? 'is-invalid' : '')} >
                    <option className='text-dark'>Select</option>
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