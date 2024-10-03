import React from 'react'
import { NavLink } from 'react-router-dom'

const News = () => {
  return (
    <>
     {/* <!-- ##### Newsletter Area Start ##### --> */}
     <section className="newsletter-area section-padding-100-0">
        <div className="container-fluid">
            <div className="row align-items-center">
                {/* <!-- Newsletter Text --> */}
                <div className="col-12 col-lg-6 col-xl-7">
                    <div className="newsletter-text mb-100">
                        <h2>Subscribe for a <span>25% Discount</span></h2>
                        <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
                    </div>
                </div>
                {/* <!-- Newsletter Form --> */}
                <div className="col-12 col-lg-6 col-xl-5">
                    <div className="newsletter-form mb-100">
                        <form action="#" method="post">
                            {/* <input type="email" name="email" className="nl-email" placeholder="Your E-mail"/> */}
                            <NavLink to ='/Login' ><input type="submit" value="Login"/></NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section></>
    
    
  )
}

export default News