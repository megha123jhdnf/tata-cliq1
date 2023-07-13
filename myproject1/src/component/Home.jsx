import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import MenMultiple from './MenMultiple'
function Home  ()  {
  const router = useNavigate()
  function  MensMultiple(){
    router('/MensMultiple')
  }
  function MensMultiple(){
    router ('/MensMultiple')
  }
  return (

    <>
      <div className='maincontainer'>
<img src="https://assets.tatacliq.com/medias/sys_master/images/47667010437150.jpg" alt="" />     
 </div>

      <div id='quick-procducts'>
        <div className='quick-procducts-align'>
        <div  onClick={MenMultiple}  className='quick-procducts-card'>
        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014021276_437Wx649H_202208031007061.jpeg" alt="" />



          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47575793303582.jpg'alt='' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466349598.jpg'alt='' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466349598.jpg'alt='' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466349598.jpg' alt='' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466546206.jpg'alt='' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466611742.jpg' alt='' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466611742.jpg' alt=''/>
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47548678373406.jpg'alt='' />
          </div>
          <div className='quick-procducts-card'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466152990.jpg' alt=''/>
          </div>
        </div>
      </div>

      <div id='bank-banner'>
        <div className='bank-banner-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/46762762436638.jpg' alt='' />
        </div>
        <div className='bank-banner-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596855787550.jpg'alt='' />
        </div>
        <div className='bank-banner-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/46690782937118.jpg'  alt=''/>
        </div>
      </div> 
      {/* only for title background  */}
      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344408094.jpg' alt=''/>
        </div>
      </div>
      {/* for product showing  */}
      <div className='ondemand-products'>
        <div className='ondemand-products-card'>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596857851934.jpg' alt='' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865257502.jpg' alt='' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596857983006.jpg'alt='' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596866830366.jpg' alt='' />
          </div>
        </div>
      </div>
      {/* only for title background  */}
      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/45993134948382.jpg'  alt=''/>
        </div>
      </div>
      {/* for product showing  */}
      <div className='ondemand-products'>
        <div className='ondemand-products-card'>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596650758174.jpg' alt=''/>
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853493790.jpg' alt=''/>
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853690398.jpg'alt='' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865323038.jpg' alt=''/>
          </div>
        </div>
      </div>
      {/* only for title background  */}
      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344277022.jpg'alt='' />
        </div>
      </div>
      {/* for product showing with circle child div  */}

      <div className='ondemand-products-card'>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596650758174.jpg' alt='' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853493790.jpg' alt='' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853690398.jpg' alt='' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865323038.jpg' alt='' />
          </div>
        </div>



         {/* only for title background  */}
      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/45993137373214.jpg' alt='' />
        </div>
      </div>


       {/* for product showing  */}
       <div className='ondemand-products'>
        <div className='ondemand-products-card'>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596650758174.jpg' alt=''/>
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853493790.jpg'alt='' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853690398.jpg' alt='' />
          </div>
          <div className='ondemand-products-card-imageHolder'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865323038.jpg' alt='' />
          </div>
        </div>
      </div>

          {/* *********Feature Brands*********** */}
          <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/45993134948382.jpg'  alt=''/>
        </div>
      </div>



          <div className='feature-brands'>
            <div className='feature-Brands'>
              <div>
                <img src='https://assets.tatacliq.com/medias/sys_master/images/47627124441118.jpg' alt=''/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47627124506654.jpg' alt=''/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47627124572190.jpg' alt=''/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47627124637726.jpg' alt=''/>
              </div>

            </div>

          </div>
                       {/* *********hair corner********* */}

          <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47636183449630.jpg' alt=''/>
        </div>
      </div>



          <div className='feature-brands'>
            <div className='feature-Brands'>
              <div>
                <img src='https://assets.tatacliq.com/medias/sys_master/images/46926359527454.jpg'alt=''/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/46926359658526.jpg' alt=''/>
              </div>
              

            </div>

          </div>



          <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344277022.jpg' alt=''/>
        </div>
      </div>


          <div className='maincontainer'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/46904782979102.jpg'alt='' />
      </div>



      <div className='title-image-backgroung'>
        <div className='title-image-backgroung-imageHolder'>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344277022.jpg' alt='' />
        </div>
      </div>



          <div className='feature-brands'>
            <div className='feature-Brands'>
              <div>
                <img src='https://assets.tatacliq.com/medias/sys_master/images/47603263438878.jpg' alt=''/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47603263504414.jpg' alt=''/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47603263569950.jpg' alt=''/>
              </div>
              <div>
              <img src='https://assets.tatacliq.com/medias/sys_master/images/47603264159774.jpg' alt=''/>
              </div>

            </div>

          </div>
     
   
    </>

  )

}

export default Home;