import React from 'react'
import diningPhoto from '../../Images/brows-dining.png'
import livingPhoto from '../../Images/browse-living.png'
import bedroomPhoto from '../../Images/brows-bedroom.png'



const Browse = () => {
  
  return <>
   
  <section className='my-5 '>

   <div className='browse text-center container'>

    <header className='fw-bold fs-2'>Browse The Range</header>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  
   <div className='d-flex justify-content-between  '>
     <div className=' row'>
     <figure className=' col-md-6 col-lg-4 p-4 cursor-pointer '><img src={diningPhoto} alt="Dining"  className='w-100 rounded '/>
      <figcaption className='mt-3 fw-bold'>Dining</figcaption>
     </figure>
     <figure className='col-md-6 col-lg-4 p-4'> <img src={livingPhoto} alt="Living"  className='w-100 rounded'/>
     <figcaption className='mt-3 fw-bold'>Living</figcaption>
     </figure>
     <figure className='col-md-6 col-lg-4 p-4'><img src={bedroomPhoto} alt="Bedroom"  className='w-100 rounded'/>
     <figcaption className='mt-3 fw-bold'>Bedroom</figcaption>
     </figure>
      </div>
    </div>

    </div>

   </section>
  
  
  
  </>
}

export default Browse
