import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  console.log("Inside app")
  return (
    <div>
    <Navbar/>
    <Routes>
    
      <Route exact path='/home' element={<Home/>}/>
    </Routes>

    <Footer/>

  </div>
  );
}

export default App;
