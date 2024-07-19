import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <NavLink to='/admin/product/add' className='btn btn-primary'>Add New Product</NavLink>
          <table className="table table-dark mt-4">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Discount</th>
                <th>Quantity</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Product