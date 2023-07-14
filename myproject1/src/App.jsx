import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Menwear from './component/Menwear';
import MenMultiple from './component/MenMultiple';
import MenSingle from './component/MenSingle';
import Profile from './component/Profile';
import Cart from './component/Cart';
import WomenMultiple from './component/WomenMultiple';
import KidMultiple from './component/KidMultiple';
import HomeKitchenMultiple from './component/HomeKitchenMultiple';
import Beauty from './component/Beauty';
import Gadget from './component/Gadget';
import Jwellery from './component/Jwellery';
import Accessories from './component/Accessories';
import Wishlist1 from './component/Wishlist1';
import Checkout from './component/Checkout';

function App() {
  console.log("Inside app")
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route exact path='checkout' element={<Checkout/>} />
      <Route exact path='wishlist' element={<Wishlist1/>} />
      <Route exact path='accessories-multiple-product' element={<Accessories/>}   />
      <Route exact path='jwellery-multiple-product' element={<Jwellery/>}  />
      <Route exact path='Gadget-multiple-product' element={<Gadget/>} />
      <Route exact path='beauty-multiple-product'  element={<Beauty/>} />
      <Route exact path='Home-kitchen-mutiple-product' element={<HomeKitchenMultiple/>} />
      <Route exact path='kid-multiple-product' element={<KidMultiple/>} />
      <Route exact path='women-multiple-product' element={<WomenMultiple/>} />
      <Route exact path='cart' element={<Cart/>} />
      <Route exact path='profile' element={<Profile/>} />
      <Route exact path='men-single' element={<MenSingle />} />
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='menwear' element={< Menwear/>} />
      <Route exact path='Men-multiple-product' element={<MenMultiple/>} />
    </Routes>

    <Footer/>

  </div>
  );
}

export default App;
