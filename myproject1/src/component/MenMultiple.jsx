import React from 'react'
import './MenMultiple.css'
import { useNavigate } from 'react-router-dom'


function MenMultiple() {
  const router = useNavigate()
  function togo() {
    router('/MenSingle')
  }
  

    return(
        <>
        <div id='MenMultiple'>
            <p>Men's clothing</p>
            <p>164811 Products</p>

            <div id='sort'>
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
                <div class='right'>
                <div onClick={togo}>
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014021276_437Wx649H_202208031007061.jpeg" alt="" />
                         <p>Puma</p>
                         <p>Puma Performance Running</p>
                         <p>Black Round Neck T-shirt</p>
                         <p>Rs.<span>949</span><del>Rs.2499</del></p>
                         <div class='starWithNo'>
                            <p>3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                    </div>
                        
                        <div>
                            
                        <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg" alt="" />
                        <p>U.S.Polo Assn.</p>
                         <p>U.S.Polo Assn.Ivory Cotton</p>
                         <p>Regular Fit Polo T-shirt</p>
                         <p>Rs.<span>1899</span></p>
                         
                       </div>

                       <div>
                       <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015298354_437Wx649H_202211152202081.jpeg" alt="" />
                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>

                      <div>
                      <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg" alt="" />
                      <p>U.S.Polo Assn.</p>
                         <p>U.S.Polo Dark Green</p>
                         <p>Regular Fit Cotton shirt</p>
                         <p>Rs.<span>2299</span></p>
                         <div class='starWithNo'>
                            <p>2.8</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                      </div>
                      <div>
                        <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000015741046_437Wx649H_202212171725101.jpeg" alt="" />
                        <p>Puma</p>
                         <p>Puma White Cotton Regular</p>
                         <p>Fit Printed Cotton T-shirt</p>
                         <p>Rs.<span>799</span> <del>2499</del></p>
                         <div class='starWithNo'>
                            <p>4.4</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                                   
           </div>

           <div>       <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016966892_437Wx649H_202303231659211.jpeg" alt="" />
                        <p>Puma</p>
                         <p>Puma White Cotton Regular</p>
                         <p>Fit Printed Cotton T-shirt</p>
                         <p>Rs.<span>799</span> <del>2499</del></p>
                         <div class='starWithNo'>
                            <p>4.4</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
           
                         </div>

                          
                        <div>
                            
                            <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg" alt="" />
                            <p>U.S.Polo Assn.</p>
                             <p>U.S.Polo Assn.Ivory Cotton</p>
                             <p>Regular Fit Polo T-shirt</p>
                             <p>Rs.<span>1899</span></p>
                             
                           </div>
                           

                           <div>
                            <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017677243_437Wx649H_202305250351271.jpeg" alt="" />
                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>

                      <div>
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017907017_437Wx649H_202306111944481.jpeg" alt="" />
                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>


                      <div>
                       <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015298354_437Wx649H_202211152202081.jpeg" alt="" />
                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />
                         </div>
                         </div>


                         <div>
                            <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017311697_437Wx649H_202304210611091.jpeg" alt="" />
                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>

                      <div>
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017416130_437Wx649H_202305011819051.jpeg" alt="" />
                      <p>U.S.Polo Assn.</p>
                         <p>U.S.Polo Dark Green</p>
                         <p>Regular Fit Cotton shirt</p>
                         <p>Rs.<span>2299</span></p>
                         <div class='starWithNo'>
                            <p>2.8</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                      </div>
                      <div>
                        <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017883440_437Wx649H_202306092110591.jpeg" alt="" />
                        <p>Puma</p>
                         <p>Puma White Cotton Regular</p>
                         <p>Fit Printed Cotton T-shirt</p>
                         <p>Rs.<span>799</span> <del>2499</del></p>
                         <div class='starWithNo'>
                            <p>4.4</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                                   
           </div>

           <div>            
            <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017906443_437Wx649H_202306111918521.jpeg" alt="" />
                             <p>Puma</p>
                         <p>Puma White Cotton Regular</p>
                         <p>Fit Printed Cotton T-shirt</p>
                         <p>Rs.<span>799</span> <del>2499</del></p>
                         <div class='starWithNo'>
                            <p>4.4</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
           
                         </div>
                         <div>
                       <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015298354_437Wx649H_202211152202081.jpeg" alt="" />
                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />
                               
                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>


                          
                        <div>
                            
                            <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg" alt="" />
                            <p>U.S.Polo Assn.</p>
                             <p>U.S.Polo Assn.Ivory Cotton</p>
                             <p>Regular Fit Polo T-shirt</p>
                             <p>Rs.<span>1899</span></p>
                             
                           </div>

                           <div>
                       <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015298354_437Wx649H_202211152202081.jpeg" alt="" />
                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>

                      <div>
                      <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014021276_437Wx649H_202208031007061.jpeg" alt="" />

                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>


                      <div>
                      <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017677243_437Wx649H_202305250351271.jpeg" alt="" />

                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />
                         </div>
                         </div>


                         <div>
                            <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017906443_437Wx649H_202306111918521.jpeg" alt="" />
                       <p>Levi's</p>
                         <p>Levi's 512 mid Indigo Slim Fit</p>
                         <p>Jeans</p>
                         <p>Rs.<span>1855 </span> <del> Rs.3199</del></p>
                         <div class='starWithNo'>
                            <p>4.3</p>
                            <img src="https://www.tatacliq.com/src/general/components/img/green-filled-star.svg" alt="" />

                         </div>
                         <p id='limit'>Limited stock!</p>
                      </div>

                           

                       
                        </div>
                </div>
                </div>
        </>
         )
}
export default  MenMultiple;