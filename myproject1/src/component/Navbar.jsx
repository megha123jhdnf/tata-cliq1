import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div id='navbar'>
    <div id='divfirst'>
        <img src='https://coupontrends.in/img/1477323360_tatacliq.png'/>

    </div>
    <div id='divsecond'>
        <div id='text'>
        <span>Tata CLiQ Luxury</span>
          
                <p>CLiQ Cash</p>
                <p>Gift Card</p>
                <p>CLiQ Care </p>
                <p>Track Orders</p>
                <p>Sign in / Sign Up</p>               

          </div>
        <div id='icon'>
            <div class='option'>
            <p>Categories</p>
            <i class="fa-solid fa-chevron-down"></i>
           
            </div>
            <div class='option'>
                <p>Brands</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div id='search-btn'>
                <div id='search1'>
               <i class="fa-solid fa-magnifying-glass"></i>
                <input type='search' placeholder='Search for Products'/>
                </div>
            </div>
            <div id='bag'>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default Navbar;