import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Menwear from './component/Menwear';
import MenMultiple from './component/MenMultiple';
import MenSingle from './component/MenSingle';

function App() {
  console.log("Inside app")
  return (
    <div>
    <Navbar/>
    <Routes>
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
