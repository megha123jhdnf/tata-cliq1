import React from 'react'
import './Accessories.css'
import { useNavigate } from 'react-router-dom'


function Accessories() {
  const router = useNavigate()
  function togo() {
    router('/SingleProduct')
  }
  

    return(
        <>
        <div id='GadgetMultiple'>
            <p>Handbags</p>
            <p>2776 Products</p>

            <div id='sort'>
                <p>Sort by : <span>Popularity</span></p>
                <img src="https://www.tatacliq.com/src/plp/components/img/list.svg" alt="" />
            </div>
            <div id='leftRight'>
                <div id='leftDiv'>
                    <div>
                        <p class='leftHeader'>Filters</p>
                        <p>Clear All</p>
                    </div>
                    <div>
                        <p class='leftHeader' >Department</p>
                        <span class='menWearType'>Accessories</span>
                    </div>

                    <div>
                        <p class='leftHeader' >Category</p>
                        <span class='kidWearType'>Women Bags</span>
                    </div>


                    
   
                       <div class='productCategory'>
                           <div  class='productCategory'>
                            <p>Brand</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div class='productCategory'>
                            <p>Size</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div  class='productCategory'>
                            <p>Type</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div class='productCategory'>
                            <p>Colour</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div  class='productCategory'>
                            <p>Prize</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div  class='productCategory'>
                            <p>Fit</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div class='productCategory'>
                            <p>Discount</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div  class='productCategory'>
                            <p>Fabric Family</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div  class='productCategory'>
                            <p>Sleeve</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div  class='productCategory'>
                            <p>Collar</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div  class='productCategory'>
                            <p>Pattern</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div  class='productCategory'>
                            <p>Occasion</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div   class='productCategory'>
                            <p>All discount</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>

                           <div  class='productCategory'>
                            <p >Availability</p>
                            <i class="fa-solid fa-plus"></i>
                           </div>
                       </div>
            
                </div>
                <div class='right'>
                <div>       
                    <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016444465_437Wx649H_202302091527421.jpeg" alt="" />
                         <p>Aldo</p>
                         <p>Aldo Being solid Medium  </p>
                         <p>Hobo Handbag</p>
                         <p>Rs.<span>5399</span><del>  Rs.9899</del></p>
                         <div class='starWithNo'>
                            <p>3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                    </div>
                        
                        <div>
                            <img src="https://img.tatacliq.com/images/i4/437Wx649H/MP000000007281744_437Wx649H_20200715130018.jpeg" alt="" />
                            <p>Mia By Tanishq</p>
                         <p>Mia By Tanishq  Earing</p>
                         <p>for Women</p>
                         <p>Rs.<span>8999 </span> <del> Rs.9299</del></p>
                       </div>

                       <div>
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017604631_437Wx649H_202305182002271.jpeg" alt="" />
                       <p>Bahama</p>

                         <p>Bahama Crinckle Light Purple</p>
                         <p>Solid Medium Bag</p>
                         <p>Rs.<span>2675 </span> <del> Rs.6999</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>

                      <div>
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000006376870_437Wx649H_202205241711411.jpeg" alt="" />
                        <p>Lavie</p>
                         <p>Lavie Wurumba Black </p>
                         <p>Solid Medium Bag</p>
                         <p>Rs.<span>1399</span><del>  Rs.4999</del></p>
                         <div class='starWithNo'>
                            <p>2.8</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                      </div>

                      <div> 
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013866808_437Wx649H_202207212230031.jpeg" alt="" />
                        <p>Accessorize London</p>
                         <p>Accessorize London Bag for Women </p>
                         <p>Rs.<span>3799</span><del>  Rs.7299</del></p>
                         <div class='starWithNo'>
                            <p>3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                    </div>
                        
                        <div>
                            <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016091469_437Wx649H_202301181932231.jpeg" alt="" />
                            <p>HideSign </p>
                         <p>HideSign Black Solid Medium</p>
                         <p>Hobo Handbag</p>
                         <p>Rs.<span>4819</span><del>  Rs.8399</del></p>
                       </div>

                       <div>
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013842616_437Wx649H_202207200512571.jpeg" alt="" />
                        <p>Lavie</p>
                         <p>Lavie Wurumba Black </p>
                         <p>Solid Medium Bag</p>
                         <p>Rs.<span>1399</span><del>  Rs.4999</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>

                      <div>
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015121041_437Wx649H_202211021903531.jpeg" alt="" />
                           <p>Bahama</p>

                         <p>Bahama Crinckle Light Purple</p>
                         <p>Solid Medium Bag</p>
                         <p>Rs.<span>2675 </span> <del> Rs.6999</del></p>
                         <div class='starWithNo'>
                            <p>2.8</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                      </div>

                      <div>     
                      <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013866808_437Wx649H_202207212230031.jpeg" alt="" />
  
                         <p>Aldo</p>
                         <p>Aldo Being solid Medium  </p>
                         <p>Hobo Handbag</p>
                         <p>Rs.<span>5399</span><del>  Rs.9899</del></p>
                         <div class='starWithNo'>
                            <p>3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                    </div>
                        
                    <div>       
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015121041_437Wx649H_202211021903531.jpeg" alt="" />
                         <p>Aldo</p>
                         <p>Aldo Being solid Medium  </p>
                         <p>Hobo Handbag</p>
                         <p>Rs.<span>5399</span><del>  Rs.9899</del></p>
                         <div class='starWithNo'>
                            <p>3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                    </div>
                        
                        

                       <div>
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017604631_437Wx649H_202305182002271.jpeg" alt="" />
                       <p>Bahama</p>

                         <p>Bahama Crinckle Light Purple</p>
                         <p>Solid Medium Bag</p>
                         <p>Rs.<span>2675 </span> <del> Rs.6999</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>

                      <div>
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000006376870_437Wx649H_202205241711411.jpeg" alt="" />
                        <p>Lavie</p>
                         <p>Lavie Wurumba Black </p>
                         <p>Solid Medium Bag</p>
                         <p>Rs.<span>1399</span><del>  Rs.4999</del></p>
                         <div class='starWithNo'>
                            <p>2.8</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                      </div>


                     
 </div>
                </div>
                </div>
        </>
         )
}
export default Accessories;