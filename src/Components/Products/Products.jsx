import React, { useEffect, useRef, useState } from "react";
// import myTestPhoto from "../../Images/brows-dining.png";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductsCSS from './Products.module.css'




const Products = () => {
  const [products, setProducts] = useState([]);

  // const myElementRef = useRef(null);

  const handleLayerClick = (event) => {
    // event.stopPropagation(); // Stop the event from bubbling up to the parent
    alert('Layer clicked!');
  };

  const handleAddToCartClick = (event) => {
    event.stopPropagation(); // Stop the event from bubbling up to the parent
    alert('Child clicked!');

  };

  async function getAllProducts() {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    console.log(data);

    setProducts(data);

  }


   // console.log(products);   //mbyl7ksh y3ml set lldata 3lshan keda mbt3rdsh lkn hya btt7t 3ady
  console.log(products);
  //   console.log('From Products Array in 2bl el return =>' +products);

  useEffect(function () {
  
    // const addToCart = document.querySelector('#addToCart');
    // addToCart.addEventListener('click',function(eventInfo){
    //   console.log('clicked');
      
    //  })

    // if (myElementRef.current) {
    //   myElementRef.current.style.backgroundColor = 'lightblue';
    // }
     

    try {
      getAllProducts();
    } catch (error) {
      console.log("Errorrrrr", error);
    }
  }, []);


  

  
  


  return  <>
  
      {console.log(products)}
      <section className="our-products">
        <h2 className="fw-bold text-center">Our Products</h2>
        <div className="container mx-auto p-4 ">
          <div className="row row-gap-4 d-flex justify-content-center ">
            {products?.map(function (product, index) {
              return (
                <div onClick={handleLayerClick} key={index} className={ProductsCSS.forHover +" col-md-6 col-lg-3 "}>
               
                  <div onClick={handleLayerClick} className="bg-body-secondary border position-relative rounded">
                    <Link onClick={handleLayerClick} to={`/singleProduct/${product.id}`} className="text-decoration-none ">
                    <div onClick={handleLayerClick} className={ProductsCSS.layer +' text-white' }>

                    <div onClick={handleLayerClick} className="d-flex justify-content-center align-items-center h-100">
                    <div onClick={handleLayerClick} className=" w-100" >
                        <div onClick={handleLayerClick}  id="addToCart" className="text-center mb-2"><button onClick={handleAddToCartClick} className={ProductsCSS.addToCart}>Add To Cart</button></div>
                        <div className="d-flex  justify-content-around  ">
                        <div>
                        <i class="fa-solid fa-share-nodes me-2"></i>
                        <span>Share</span>
                        </div>
                        <div><i class="fa-solid fa-code-compare me-2"></i>
                        <span>Compare
                        </span></div>
                        <div>
                        <i class="fa-solid fa-heart me-2"></i>
                        <span>Like</span>
                        </div>
                        </div>
                      </div>
                    </div>

                     

                     </div>
                      <img src={product.image} alt={product.title} className={ProductsCSS.productImage +" w-100 "}  />
                     <div className="px-3">
                     <p className=" my-2 fw-bold text-black ">
                        {product.title.split(" ").slice(0, 2).join(' ')}
                      </p>
                      <p className=" text-secondary overflow-x-hidden text-nowrap ">{product.description.split(" ").slice(0, 6).join(' ') }</p>
                      <div className=" d-flex justify-content-between ">
                        <p className=" fw-bold me-3 text-black">    
                          Rp {product.price}
                        </p>
                        <p className="text-secondary text-decoration-line-through">
                        {product.price + 1000}
                        </p>
                      </div>
                     </div>
                    </Link>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </>
  ;
};

export default Products;
