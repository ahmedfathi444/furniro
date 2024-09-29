import React from 'react'
import { Link } from 'react-router-dom'
import myLogo from '../../Images/Meubel House_Logos-05@2x.png'
// import pesonalIcon from '../../Images/pesonal-icon.png'
// import searchIcon from '../../Images/search-icon.png'
// import heartIcon from '../../Images/heart-icon.png'
// import cartIcon from '../../Images/cart-icon.png'


import NavbarCss from '../Navbar/Navbar.module.css'  



const Navbar = () => {
  return <>

  <nav className="navbar  navbar-expand-lg bg-white">
  <div className="container d-flex justify-contet-between">
  <Link  className={NavbarCss.header+" navbar-brand fw-bolder d-flex justify-contet-center align-items-center "} to="/home">
      <img src={myLogo} alt="Logo" width="50" height="24" className={" d-inline-block align-text-top fw-bold mx-1"}/>
      Furniro
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className={NavbarCss.customNavLink +" nav-link  active"} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={NavbarCss.customNavLink +" nav-link "} to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className={NavbarCss.customNavLink +" nav-link"} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={NavbarCss.customNavLink +" nav-link"} to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className={NavbarCss.customNavLink +" nav-link"} to="/checkout">Checkout</Link>
        </li>
        
        
      </ul>
    </div>

    <div>
      <Link className="navbar-brand" to="#">
      {/* <img src={pesonalIcon} alt="Logo" width="23.33" height="18.67" className="d-inline-block align-text-top fw-bold"/> */}
      <i className="fa-solid fa-user"></i>
    </Link>
    <Link className="navbar-brand" href="#">
      {/* <img src={searchIcon} alt="Logo" width="23.33" height="18.67" className="d-inline-block align-text-top fw-bold"/> */}
      <i className="fa-solid fa-magnifying-glass"></i>
    </Link>
    <Link className="navbar-brand" href="#">
      {/* <img src={heartIcon} alt="Logo" width="23.33" height="18.67" className="d-inline-block align-text-top fw-bold"/> */}
      <i className="fa-solid fa-heart"></i>
    </Link>
    <Link className="navbar-brand" href="#">
      {/* <img src={cartIcon} alt="Logo" width="23.33" height="18.67" className="d-inline-block align-text-top fw-bold"/> */}
      <i className="fa-solid fa-cart-shopping"></i>
    </Link>
      </div>
  </div>
</nav>
  </>
}

export default Navbar
