import React from 'react'
// import footerCss from './Footer.module.css'
import styleFooter from '../Footer/Footer.module.css'
// import stylefooter from '../Footer/Footer.module.scss'

const Footer = () => {
  
  return <>
  
  <footer className='footer container p-5'>

    <div className={styleFooter.footer__content +' d-flex justify-content-between column-gap-4 '}>
 
        <div className='footer__content__header'>
         
        <p className='footer__content__header__title fw-bold'>Funiro.</p>
           
             <div>
        <p className={styleFooter.footer__content__header__content +' footer__content__header__content'}>400 University Drive Suite 200 Caral<br/> Gables ,<br/> FL 33134 USA</p>
              </div>
        </div>

        <div className=" footer__content__links ">
          <h5>Links</h5>
          <p>Home</p>
          <p >Shop</p>
          <p>About</p>
          <p >Contact</p>
        </div>

        <div className="footer-content-help">
        <h5>Help</h5>
          <p>Payment Options</p>
          <p>Returns</p>
          <p >Privacy Policies</p>

        </div>

        <div className="footer__content">
          <h5 className='pb-3'>Newsletter</h5>
           <div className={'  footer__content__newsletter row  justify-content-between '}>
           <input className='border-0 border-bottom border-dark col-md-7  ' type="text" placeholder='Enter Your Email' />
           <button className={styleFooter.subscribe +' bg-transparent border-0 border-bottom border-dark text-dark fw-semibold col-md-4  ' + styleFooter.footer__content_subscribe}>SUBSCRIBE</button>
           </div>
        </div>

      </div>
      

      

       <p className='border-top pt-4'>2023 furino. All rights reverved</p>

     

   
  
  

  </footer>
  
  
  </>
}

export default Footer
