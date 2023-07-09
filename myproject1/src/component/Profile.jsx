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
        <div>
            <p>Basic Details</p>
            <p>Add</p>
        </div>
       </div>
       
       <div id='leftSection'>3</div>
    </div>
  )
}

export default Profile