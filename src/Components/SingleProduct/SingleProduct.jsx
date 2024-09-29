import React, { useEffect, useState } from 'react'
// import productPhoto from '../../Images/product-photo.png';
import SingleProductCSS from '../SingleProduct/SingleProduct.module.css'

import sofa1 from '../../Images/sofa1.png'
import sofa2 from '../../Images/sofa2.png'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {


 const [productDetails,setProductDetails] = useState(null)

 const {id} = useParams()


 const gitSingleProduct = async (id)=>{

  const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //3mlt Distruct LL data mn el data el rag3a mn el api (by default el data btb2a m7tota fe proprty asmha data)

  // console.log(data);

  //Hna 7atet el Data fe el productDetails state 3lshan ast5dmha bra el function bra7ty
  setProductDetails(data)


 }

//  console.log(productDetails);
 
 

useEffect(function(){

  try {
    gitSingleProduct(id)
  } catch (error) {
    console.log("Errorrrrr", error);
  }


},[])
 



  return <>

  {console.log(productDetails)}
  

  <section className='singleProduct '>


  <div className={SingleProductCSS.backword }>
  {/* <div className=" container" >singleProduct</div> */}
  <p className='container '><Link to='/home' className=" text-decoration-none text-black fw-medium ms-4">Home &gt; </Link><span className='border-start ps-2 py-2 ms-1'>{productDetails?.title.split(" ").slice(0, 3).join(' ')}</span></p>
  </div>



   <div className='container  p-3'>
       
       <div className='row justify-content-around'>

       <div className='col-md-1 mt-2'>
        <div><img src={productDetails?.image} alt="productImage" className='w-100 border rounded mb-2' /></div>
        <div><img src={productDetails?.image} alt="productImage" className='w-100 border rounded mb-2' /></div>
        <div><img src={productDetails?.image} alt="productImage" className='w-100 border rounded mb-2' /></div>
        <div><img src={productDetails?.image} alt="productImage" className='w-100 border rounded mb-2' /></div>
       </div>

       <div className='col-md-4 '>
       <div className={SingleProductCSS.bgColor+' image rounded '}>
        <img src={productDetails?.image} alt={productDetails?.title}  className='w-100 rounded border' />
       </div>
       </div>

       <div className={SingleProductCSS.productDetails +' productDetails col-md-5'}>
  <h3>{productDetails?.title}</h3>
  <p className={SingleProductCSS.productPrice +' text-body-tertiary mb-0 fw-medium w-25'}>Rs. {productDetails?.price}</p>
  <div className='my-2'>
    <i className="fa-solid fa-star" style={{color:'#FFD43B'}}></i> 
    <i className="fa-solid fa-star" style={{color:'#FFD43B'}}></i> 
    <i className="fa-solid fa-star" style={{color:'#FFD43B'}}></i> 
    <i className="fa-solid fa-star" style={{color:'#FFD43B'}}></i> 
    <i className="fa-solid fa-star" style={{color:'#FFD43B'}}></i> 
    <i className="fa-solid fa-star-half" style={{color:'#FFD43B'}}></i> 
    <span className=' border-start border-secondary-subtle text-body-tertiary p-1 '>5 Customer Review</span></div>
  <p className=''>{productDetails?.description}</p>

   <p className='text-body-tertiary'>Size</p>
   <div className=' mb-3'>
    <span className={SingleProductCSS.bgSizeL}>L</span>
    <span className={SingleProductCSS.bgSize2x}>XL</span>
    <span className={SingleProductCSS.bgSize2x}>XS</span>
   </div>

   
   <p>Color</p>
   <div className={SingleProductCSS.Colors} >
    <span className={SingleProductCSS.span1}></span>
    <span className={SingleProductCSS.span2}></span>
    <span className={SingleProductCSS.span3}></span>
   </div>

  <div className='btns mb-5'>
    
   <button className='btn btn-outline-info '>-<span className='px-3'>{productDetails?.rating.count}</span>+</button>
   <button className='btn btn-outline-warning mx-3'>Add To Cart</button>
   <button className='btn btn-outline-success '>+ Compare</button>
   {/* <button className='btn btn-outline-secondary '><Link to='/checkout' className='text-decoration-none text-dark'>CheckOut</Link></button> */}
  </div>
   

   <div className=' social py-5 border-top'>
   
   
   <table className={SingleProductCSS.productPrice}>
    <tbody>
      <tr>
        <td className='pe-4'>SKU</td>
        <td>:</td>
        <td className='ps-2'>SS001</td>
      </tr>

      <tr>
        <td className='pe-4'>Category</td>
        <td>:</td>
        <td className='ps-2'>{productDetails?.category}</td>
      </tr>

      <tr>
        <td className='pe-4'>Rate</td>
        <td>:</td>
        <td className='ps-2'> <i className="fa-solid fa-star" style={{color:'#FFD43B'}}></i> {productDetails?.rating.rate}</td>
      </tr>

      
      <tr>
        <td className='pe-4'>Tags</td>
        <td>:</td>
        <td className='ps-2'>Sofa, Chair, Home, Shop</td>
      </tr>

      <tr>
        <td className='pe-4'>Share</td>
        <td>:</td>
        <td className='ps-2'><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-linkedin px-3"></i> <i className="fa-brands fa-twitter"></i></td>
      </tr>
      

    </tbody>
   </table>
   
   </div>

       </div>
       </div>
    
   </div>

  </section>

  <section className='py-5'> 

    <div className='container'>
    <div className='text-center'>
      <span className='fs-4 fw-medium'>Description</span>
      <span className='mx-5 text-body-tertiary '>Additional Information</span>
      <span className='text-body-tertiary'>Reviews [5]</span>
    </div>

    <p className='text-body-tertiary my-4'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
    <p className='text-body-tertiary'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      
    <div className='row '>
      <div className={ SingleProductCSS.mb+' col-md-6'}><img src={sofa1} alt="sofa1" height={348} className={SingleProductCSS.bgColor+" w-100"} /></div>
      <div className={'  col-md-6'}><img src={sofa2} alt="sofa2" height={348} className={SingleProductCSS.bgColor+" w-100"} /></div>
    </div>

    </div>
  </section>
  
  
  </>
}

export default SingleProduct

