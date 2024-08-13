import React from 'react'

const ProductBox = (props) => {
  return (
    <div className="col-lg-3 col-md-6 text-center ">
					<div className="single-product-item" style={{backgroundColor : "#ccc"}}>
						<div className="product-image">
							<a href="single-product.html"><img src="/public/assets/img/products/product-img-1.jpg" alt=""/></a>
						</div>
						<h3>{props.info.title}<br /><small>({props.info.category})</small></h3>
						<p className="h5">{props.info.price}.00
                        
                        </p>
						
						<a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
  )
}

export default ProductBox