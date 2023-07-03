import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Login from './component/Login';

function App() {
  console.log("Inside app")
  return (
    <div>
      <Navbar/>
      
     <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='login' element={<Login/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
