import React from 'react'

// import homePhote from '../../Images/home-photo.jpeg'

import HomeCss from '../Home/Home.module.css'
import Browse from '../Browse/Browse'
import Products from '../Products/Products'
// import { Link } from 'react-router-dom'

const Home = () => {
  return <>
  

  <section className={HomeCss.bgHome}>
     <div className={HomeCss.homeContent +''}>
      <div className='homeContent p-5'>
        <p  className='fw-bold'>New Arrival</p>
        <p  className={HomeCss.homeTitle+' homeTitle'}>Discover Our<br/> New Collection</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat.</p>
        <button  className={HomeCss.btnBuy}>BUY NOW</button>
      </div>
     </div>
  </section>

  <Browse/>
 
  <Products/>




  </>
}

export default Home


