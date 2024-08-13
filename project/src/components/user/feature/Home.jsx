import React, {useState, useEffect} from 'react'
import Discount from '../shared/Discount'
import News from '../shared/News'
import ProductBox from '../shared/ProductBox'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
const Home = () => {

	let [allPro, setAllPro] = useState([]);

	useEffect(()=>{
		axios.get(API_URL+"/product").then(response=>{
			console.log(response.data);
			setAllPro(response.data);
		})
	},[])

  return (
    <>
    	<div className="product-section mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Our</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>

			<div className="row">
				{
					allPro.map(item=><ProductBox info={item} />)
				}
								
				
			</div>
		</div>
	</div>
	<Discount />
	<News />
    </>
  )
}

export default Home