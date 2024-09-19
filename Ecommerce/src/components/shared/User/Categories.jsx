import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Api_Url from '../../../constants/Api_Url';

const Categories = () => {
    let[Category,SetCategory]=useState([]);
  useEffect(()=>{
            axios.get(Api_Url+"Category")
            .then(response=>{
                SetCategory(response.data);
                console.log(response.data);
            });
  }, []);
  return (

    <div className="shop_sidebar_area mt-20px">

{/* <!-- ##### Single Widget ##### --> */}
<div className="widget catagory mb-50">
    {/* <!-- Widget Title --> */}
    <h6 className="widget-title mb-30">Catagories</h6>

    {/* <!--  Catagories menu --> */}
     <div class="catagories-menu">
                    <ul>
                        {
                            Category.map((item, index)=>{
                                return(<li key={index}><a href="#">{item.category}</a></li>)

                            })
                        }
                        
                    </ul>
                </div>
</div>

{/* <!-- ##### Single Widget ##### --> */}
<div className="widget brands mb-50">
    {/* <!-- Widget Title --> */}
    <h6 className="widget-title mb-30">Brands</h6>

    <div className="widget-desc">
        {/* <!-- Single Form Check --> */}
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="amado"/>
            <label className="form-check-label" for="amado">Amado</label>
        </div>
        {/* <!-- Single Form Check --> */}
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="ikea"/>
            <label className="form-check-label" for="ikea">Ikea</label>
        </div>
        {/* <!-- Single Form Check --> */}
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="furniture"/>
            <label className="form-check-label" for="furniture">Furniture Inc</label>
        </div>
        {/* <!-- Single Form Check --> */}
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="factory"/>
            <label className="form-check-label" for="factory">The factory</label>
        </div>
        {/* <!-- Single Form Check --> */}
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="artdeco"/>
            <label className="form-check-label" for="artdeco">Artdeco</label>
        </div>
    </div>
</div>

{/* <!-- ##### Single Widget ##### --> */}
<div className="widget color mb-50">
    {/* <!-- Widget Title --> */}
    <h6 className="widget-title mb-30">Color</h6>

    <div className="widget-desc">
        <ul className="d-flex">
            <li><a href="#" className="color1"></a></li>
            <li><a href="#" className="color2"></a></li>
            <li><a href="#" className="color3"></a></li>
            <li><a href="#" className="color4"></a></li>
            <li><a href="#" className="color5"></a></li>
            <li><a href="#" className="color6"></a></li>
            <li><a href="#" className="color7"></a></li>
            <li><a href="#" className="color8"></a></li>
        </ul>
    </div>
</div>

{/* <!-- ##### Single Widget ##### --> */}
<div className="widget price mb-50">
    {/* <!-- Widget Title --> */}
    <h6 className="widget-title mb-30">Price</h6>

    <div className="widget-desc">
        <div className="slider-range">
            <div data-min="10" data-max="1000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="10" data-value-max="1000" data-label-result="">
                <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
            </div>
            <div className="range-price">$10 - $1000</div>
        </div>
    </div>
</div>
</div>

 )
}

export default Categories