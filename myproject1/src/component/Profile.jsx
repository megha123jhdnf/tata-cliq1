import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div id='profile'>
       <div id='menu'>
          <p>Menu</p>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/general/components/img/WL5.svg" alt="" />
          <p>My Wishlist</p>
          </div>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" alt="" />
          <p>Order History</p>
          </div>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/account/components/img/Neupass_monochrome.svg" alt="" />
          <p>NeuPass</p>
          </div>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" alt="" />
          <p>Address Book</p>
          </div>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/account/components/img/brand.svg" alt="" />
            <p>Brands</p>
          </div>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/account/components/img/card.svg" alt="" />
          <p>Saved Payment</p>
          </div>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/account/components/img/alert.svg" alt="" />
          <p>Alert & Coupons</p>
          </div>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" alt="" />
          <p>Gift Card</p>
          </div>

          <div  class='cateOption'>
            <img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" alt="" />
          <p>CLIQ Cash</p>
          </div>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" alt="" />
            <p>Manage Notification</p>
          </div>

          <div class='cateOption'>
            <img src="https://www.tatacliq.com/src/account/components/img/settingsRed.svg" alt="" />
            <p>profile</p>
          </div>

</div>
       <div id='generalInfo'>
        <p>General Information</p>
        <div class='details'>
            <p>Basic Details</p>
            <p>Add</p>
            </div>

            <div id='BdetailsInfo'>
                <label>First Name </label>
                <input class='SameStyle1' type="text"  placeholder='First Name'/><br />
                <label>Last Name </label>
                <input class='SameStyle1' type="text"  placeholder='Last Name'/><br />
                <label>Date of Birth </label>
                <input id='date' type="date"  placeholder='dd-mm-yyyy'/>

            </div>

            <div class='details'>
            <p>Contact Details</p>
            <p>Edit</p>
            </div>

            <div id='CdetailsInfo'>
                <label>Mobile Number </label>
                <input id='Monumber' type="number"  placeholder='+91-972456856'/><br />
                <label>Last Name </label>
                <input class='SameStyle1' type="email"  placeholder='m.megha12@gmail.com'/><br />
                

            </div>

            <div class='details'>
            <p>Personal Details</p>
            <p>Add</p>
            </div>

            <div id='PdetailsInfo'>
                <label>Gender </label>
                <input class='SameStyle1' type="text"  /><br />
                

            </div>
       
       </div>
       <div id='leftSection'>
       <i class="fa-sharp fa-regular fa-user"></i>
       <p>meghali kamble</p>
       </div>
</div>  )
}

export default Profile