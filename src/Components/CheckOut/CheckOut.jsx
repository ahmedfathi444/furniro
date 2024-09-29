import React from "react";

import CheckOutCSS from "../CheckOut/ChekOut.module.css";
import myLogo from '../../Images/Meubel House_Logos-05.png'
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";



const CheckOut = () => {

  // const {productDetalis} = useSelector(( store )=> store.checkout)
  const {oneObj} = useSelector(( store )=> store.products)
 
  // console.log(productDetalis);
 
  //This Function send productdetails that found in Redux(checkoutSlice) to LocalStorage for stored it
  const productCheckout =()=>{
    
    console.log(oneObj);
    // console.log(oneObj);
   
    //This line send productDetails object to LocalStorage 
    localStorage.setItem('productDetalis', JSON.stringify(oneObj) )

  }

  // If i need to get productDetails from LocalStorage using this line below
  // console.log(JSON.parse(localStorage.getItem('productDetalis')));

  // If i need to remove productDetails from LocalStorage using this line below
  // localStorage.removeItem('productDetalis')

  const sendDataToApi= async()=>{

        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;
        const companyName = document.querySelector('#companyName').value;
        const CountryRegion = document.querySelector('#country-region').value;
        const streetAddress = document.querySelector('#streetAddress').value;
        const townCity = document.querySelector('#town-city').value;
        const province = document.querySelector('#province').value;
        const zipCode = document.querySelector('#zipCode').value;
        const phone = document.querySelector('#phone').value;
        const emailAddress = document.querySelector('#emailAddress').value;
        const additionalInformation = document.querySelector('#additionalInformation').value;

        const shippingAddress = {
            "shippingAddress": {
                "firstName": firstName,
                "lastName": lastName,
                "companyName": companyName,
                "CountryRegion": CountryRegion,
                "streetAddress": streetAddress,
                "townCity": townCity,
                "province": province,
                "zipCode": zipCode,
                "phone": phone,
                "emailAddress": emailAddress,
                "additionalInformation": additionalInformation,
            }
        }
  
        // console.log(shippingAddress);
        //                                                                                              body request
        try {
            const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/cartId}`, shippingAddress, {
                // headers: { token: localStorage.getItem('tkn') }
            })
           
            // console.log(data.data);
            if (data.status == 'success') {
                // toast.success('Confirm Successfully');
            }

        }
        catch (error) {
            console.log('Error', error);
            // toast.error('Error Occured')
        }

  
  }
  

  return (
    <>

      <section className="checkout">
        <div className={CheckOutCSS.checkoutHero}>
            <div className="text-center">
                <img src={myLogo} alt="" />
                <h2 className="fw-medium text-black">Checkout</h2>
                {/* <p><span className="text-black fw-medium">Home &gt; </span>Checkout</p> */}
   
                <div className=''>
  {/* <div className=" container" >singleProduct</div> */}
  <p className='container '><Link to='/home' className=" text-decoration-none text-black fw-medium ms-4">Home &gt; </Link><span className='  py-2 ms-1'> checkout</span></p>
  </div>





            </div>
        </div>
      </section>

      <section className="checkout-content container">
        <div className="row">
          <div className="biling-details col-md-6 p-5">

            <div className="full-name d-flex justify-content-between mb-3 ">
              <div className={CheckOutCSS.mr+" first-name "}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" className="form-control  " />
              </div>

              <div className="last-name ">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" className="form-control " />
              </div>
            </div>

            <div className="company-name mb-3">
              <label htmlFor="companyName">Company Name (Optional) </label>
              <input id="companyName" type="text" className="form-control  " />
            </div>

            <div className="country-region mb-3 ">
              <label htmlFor="country-region">Country / Region </label>
              <select
                id="country-region"
                className="form-select text-body-tertiary"
                aria-label="Default select example"
              >
                <option defaultValue>Sri Lanka</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="street-address mb-3">
              <label htmlFor="streetAddress">Street address </label>
              <input
                id="streetAddress"
                type="text"
                className="form-control  "
              />
            </div>

            <div className="town-city mb-3">
              <label htmlFor="town-city">Town / City </label>
              <input id="town-city" type="text" className="form-control  " />
            </div>

            <div className="province mb-3 ">
              <label htmlFor="province">Province </label>
              <select
                id="province"
                className="form-select text-body-tertiary"
                aria-label="Default select example"
              >
                <option defaultValue>Western Province</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="zip-code mb-3">
              <label htmlFor="zipCode">ZIP code</label>
              <input id="zipCode" type="text" className="form-control  " />
            </div>

            <div className="phone mb-3">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="text" className="form-control  " />
            </div>

            <div className="email-address mb-4">
              <label htmlFor="emailAddress">Email-address</label>
              <input
                id="emailAddress"
                type="text"
                className="form-control  "
              />
            </div>

            <div className="additional-information ">
              <input
                id="additionalInformation"
                type="text"
                className="form-control"
                placeholder="Additional-information"
              />
            </div>
          </div>

          <div className="place-order col-md-6 ">

            <div className="d-flex justify-content-between pt-5 pb-3 px-5 border-bottom">
              <div className="prdouct">
                <p className="fw-medium fs-3 text-black">Product</p>
                <p>
                  <span className="text-body-tertiary">{oneObj?.title.split(" ").slice(0, 3).join(' ')}</span> x 1
                </p>
                <p>Subtotal</p>
                <p>Total</p>
              </div>

              <div className={CheckOutCSS.subtotal + " subtotal "}>
                <p className="fw-medium fs-3 text-black">Subtotal</p>
                <p>Rs. {oneObj?.price}</p>
                <p>Rs. {oneObj?.price}</p>
                <p className={CheckOutCSS.subtotal__total}>Rs. {oneObj?.price} </p>
              </div>
            </div>

            <div className="px-5 py-3">
             
                <p className=" align-middle "> <i className="fa-solid fa-circle fa-xs me-1"></i> Direct Bank Transfer</p>
                
                <p className="text-body-tertiary">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                <p className="align-middle text-body-tertiary fw-medium "> <i className="fa-regular fa-circle fa-xs me-1"></i> Direct Bank Transfer</p>
                <p className="align-middle text-body-tertiary fw-medium"> <i className="fa-regular fa-circle fa-xs me-1"></i> Cash On Delivery</p>

                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-black fw-semibold">privacy policy.</span></p>

                <div className="text-center">
                <button onClick={productCheckout} className={CheckOutCSS.orderBtn +" btn btn-outline-success orderBtn"}>Place order</button>
                </div>
                
            </div>


          </div>
        </div>
      </section>


     <section className={CheckOutCSS.bgColor +" p-5 border-bottom "}>
        <div className=" row align-items-center p-0 container mx-auto ">
            <div className="d-flex align-items-center col-lg-3 col-md-6  ">
            <i class="fa-solid fa-trophy fa-2xl align-middle "></i>
            <div className="ms-2 " >
            <p className="mb-0 fw-bold">High Quality</p>
            <p className="mb-0 text-body-tertiary ">crafted from top materials</p>
            </div>
            </div>

            <div className="d-flex align-items-center col-lg-3 col-md-6 ">
            <i class="fa-solid fa-shield-virus fa-2xl align-middle"></i>
            <div className="ms-2 " >
            <p className="mb-0 fw-bold">Warranty Protection</p>
            <p className="mb-0 text-body-tertiary ">Over 2 years</p>
            </div>
            </div>

            <div className="d-flex align-items-center col-lg-3 col-md-6 ">
        
            <i class="fa-solid fa-truck-ramp-box fa-2xl align-middle"></i>
            <div className="ms-2 " >
            <p className="mb-0 fw-bold">Free Shipping</p>
            <p className="mb-0 text-body-tertiary ">Order over 150 $</p>
            </div>
            </div>

            <div className="d-flex align-items-center col-lg-3 col-md-6 ">
           
            <i class="fa-solid fa-headset fa-2xl align-middle"></i>
            <div className="ms-2 " >
            <p className="mb-0 fw-bold">24 / 7 Support</p>
            <p className="mb-0 text-body-tertiary ">Dedicated support</p>
            </div>
            </div>


           
        </div>
     </section>



    </>
  );
};

export default CheckOut;
