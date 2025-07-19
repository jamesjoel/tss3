import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
<>
{/* <div className="main-content-wrapper d-flex clearfix"> */}

<div className="products-catagories-area clearfix">
  {/* <div className="amado-pro-catagory clearfix" style={{position:"relative"}}> */}

                {/* <!-- Single Catagory --> */}
                

              <div style={styles.container}>
      {/* Left Side - Image */}
      <div style={styles.imageSection}>
        <img
          src="/assets/img/bg-img/1.jpg" // Make sure this image exists in public folder
          alt="Chair with decor"
          style={styles.image}
        />
      </div>

      {/* Right Side - Text Content */}
      <div style={styles.contentSection}>
        <h2 style={styles.premium}>Premium</h2>
        <h1 style={styles.title}>HOME DECOR</h1>
        <p style={styles.description}>
          Bring elegance into your home with our curated selection of modern
          furniture, sleek lighting, stylish rug, and cozy décor.
        </p>
        <NavLink to="/Shop" style={styles.button}>
          SHOP NOW
        </NavLink>
      </div>
    </div>
            {/* </div> */}
        </div>
      
        {/* </div> */}
</>
  )
}
const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
     minHeight: 'calc(100vh - 100px)'
  },
  imageSection: {
    flex: '1',
    textAlign: 'center',
    minWidth: '300px',
  },
  image: {
    width: '80%',
    maxWidth: '400px',
    borderRadius: '8px',
  },
  contentSection: {
    flex: '1',
    padding: '20px',
    minWidth: '300px',
  },
  premium: {
    fontFamily: 'cursive',
    fontSize: '28px',
    color: '#333',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#2c2c2c',
    margin: '10px 0',
  },
  description: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#f26b3a',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};

export default Home