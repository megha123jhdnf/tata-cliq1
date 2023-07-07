import React from 'react'
import './MenMultiple.css'
const MenMultiple = () => {
  

    return(
        <>
        <div id='MenMultiple'>
            <p>Men's clothing</p>
            <p>164811 Products</p>

            <div>
                <p>Sort by : <span>Popularity</span></p>
            </div>
            <div id='leftRight'>
                <div id='leftDiv'>
                    <div>
                        <p class='leftHeader'>Filters</p>
                        <p>Clear All</p>
                    </div>
                    <div>
                        <p class='leftHeader' >Department</p>
                        <span class='menWearType'>Men's Clothing</span>
                    </div>

                    <div>
                        <p class='leftHeader' >Category</p>
                        <span class='menWearType'>Casual Wear</span>
                    </div>
   
                    <div>
                    <p class='leftHeader' >Product Type</p>
                       
                        <div class='selectOption'>
                            <div>
                               <input type="radio" />
                               <label>T-shirts & Polos</label>
                            </div>
                            <span>40823</span>
                        </div>

                        <div class='selectOption'>
                            <div>
                              <input type="radio" />
                            <label>Shirts</label>
                            </div>
                        <span>30959</span>
                        </div>

                        <div class='selectOption'>
                            <div>
                            <input type="radio" />
                            <label>Sweatshirts</label>
                            </div>
                         <span>7434</span>
                        </div>

                        <div class='selectOption'>
                        <div>
                            <input type="radio" />
                           <label>Sweatshirts</label>
                        </div>
                        <span>6523</span>
                        </div>

                        <div class='selectOption'>
                            <div>
                            <input type="radio" />
                           <label>Sweaters</label>
                            </div>
                          <span>3767</span>
                        </div>

                        <div class='selectOption'>
                            <div>
                            <input type="radio" />
                            <label>Jeans</label>
                            </div>
                           <span>10384</span>
                        </div>

                        <div class='selectOption'>
                        <div>
                            <input type="radio" />
                           <label>Trousers & Chinos</label>
                        </div>
                           <span>7355</span>
                        </div>

                        <div class='selectOption'>
                         <div>
                            <input type="radio" />
                           <label>Shorts</label>
                         </div>
                           <span>4398</span>
                        </div>

                        <div class='selectOption'>
                            <div>
                              <input type="radio" />
                              <label>Blazers</label>
                            </div>
                             <span>324</span>
                        </div>

                        <div class='selectOption'>
                            <div>
                                <input type="radio" />
                               <label>Others</label>
                               </div>
                           <span>34</span>
                        </div>
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
                <div id='rightDiv'>
                    <div>
                      <img src="https://www.tatacliq.com/u-s-polo-assn-dark-green-regular-fit-shirt/p-mp000000015191655" alt="" />
                    </div>
                    

                </div>
            </div>
        </div>
   
        </>
         )
}
export default  MenMultiple;