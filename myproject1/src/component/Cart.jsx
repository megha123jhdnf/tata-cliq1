import React from "react";
import './Cart.css'

const Cart = () => {
    return (
        <>
        <div id='cart'>
          <div>
            <h1>My Bag</h1>
            <p><span>Delhi,110001</span> <span>change PIN Code</span></p>
          </div>
           <div>
            <p>Apply a relevant <span>coupon code</span> here to avail any additional discount. Applicable <span>cashback</span> if any will be credited to your account as per T&C.</p>
            <div id='twoPart'>
                <div id='leftPart'>
                    <div>
                        <img src="https://www.tatacliq.com/src/cart/components/img/Delivery.svg" alt="" />
                        <p>Cogratulations NeuPass User!! Your order is eligible for <span>FREE Shipping!</span> </p>
                    </div>
                    <div id='productDetails'>
                        <div>
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014192424_437Wx649H_202208210124011.jpeg" alt="" />
                          <div id='productInfo'>
                             <p>Juniper Green Printed Straight Kurta</p>
                             <p><span>₹799.00</span>  <del>₹1699.00</del>  ₹900.00 Off</p>
                             <div id='productPattern'>
                                <p>Color: Green</p>
                                <p>Size: S</p>
                             </div>
                          </div>
                          {/* <div id='deliveryOption'>
                            <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" alt="" />
                            <p>Delivery by 15th Jul | FREE</p>
                          </div> */}
                          
                        </div>
                        <div id='quantity'>
                                <p>Quantity:1</p>
                            <div id='wishlist'>
                                <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt="" />
                                <p>Save to wishlist
</p>
                            </div>
                            <p>Remove</p>
                          </div>
                    </div>

                    <div id='btn'>
                        <p>Continue Shopping</p>
                    </div>
                </div>
                <div id='rightPart'>
                    <div id='coupon'>
                        <img src="https://www.tatacliq.com/src/general/components/img/coupon.png" alt="" />
                        <p>Check for Coupons</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div id='productdetailInfo'>
                        <div>
                            <p>Bag Total</p>
                            <p>₹1699.00</p>
                        </div>

                        <div>
                            <p>Shipping Charge</p>
                            <p id='green'>FREE</p>
                        </div>

                        <div>
                            <p>Bag Subtotal</p>
                            <p>₹1699.00</p>
                        </div>

                        <div>
                            <p>Product Discount(s)</p>
                            <p>-₹900.00</p>
                        </div>
                        <p>you will save ₹900.00 on this order</p>
                        <div id='total'>
                            <div>
                            <p>Total</p>
                            <p>₹ 799</p>
                            </div>
                            
                            <div>
                                <p>Checkout</p>
                            </div>
                        </div>
                        <div id='seewishlist'>
                            <p>You have 1 items in your wishlist</p>
                            <p>See all</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
        <div id='needhelp'>
            <p>Need Help ?Contact Us|FAQ</p>
        </div>
        <div id='security'>
            <p><span>SSL</span> SECURED PAYMENT</p>
            <p>Your information is protected by 256-bit SSL encryption</p>
        </div>
        </>
    )
}
export default Cart;