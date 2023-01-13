import logo from './logo.svg';
import './App.css';
import Dashboard from './compnents/Dashboard';
import Navs from './compnents/Navs';
import Sidebar from './compnents/Sidebar';
import { UserContext } from './compnents/UseContext';
import { UseContext } from './compnents/UseContext'
import { useState } from 'react';
import AddData from './compnents/AddData';
import Hompage from './compnents/ClientSide/Hompage';
import ProductTable from './compnents/ProductTable';
import AddProductForm from './compnents/AddProductForm';
import TestUpload from './compnents/TestUpload';
import Products from './compnents/Products';
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
import Navbar from './compnents/Navigation';
import Login from './compnents/Login';
import Signup from './compnents/Signup';
//import { useNavigate } from 'react-router-dom';
function App() {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  //const navigate = useNavigate();
  const handleLoggedIn = (e) => {
    setLoggedIn(true)
    console.log(loggedIn);
    //navigate("/Products")
  }
  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log('Funciton called!');
    setShow(true);
  }

  const toggleShow =() => setShow(!show)
  return (
    <div className="App">
      {/* <Hompage />
      <Navs handleshow={handleShow} />
      <Sidebar show={show} handleshow = {handleShow} handleclose = {handleClose}/>
      <AddData /> */}
      {/* <Dashboard /> */}

{/* --------------new work------------------------- */}
      {/* <Navs handleshow={handleShow} /> */}
      {loggedIn == true?<Navs handleshow={handleShow}/> :
                "" }
      {loggedIn == true?<Sidebar show={show} handleshow = {handleShow} handleclose = {handleClose}/> :
                "" }
       {/* <Navs handleshow={handleShow}/> */}
      {/* <Login /> */}
      {/* <Login /> */}
       {/* <Sidebar show={show} handleshow = {handleShow} handleclose = {handleClose}/> */}
      {/* <AddProductForm /> */}
    <BrowserRouter>
    <Routes>
      {/* <div className='products'> */}
        {/* <ProductTable />  */}
        {/* <Route exact path="/" element={<Products/>}/> */}
         <Route exact path="/Products" element={<Products/>}/> 
        <Route exact path="/" element={<Login handleLoggedIn = {handleLoggedIn}/>}/>
        <Route exact path="/Signup" element={<Signup />}/>
    {/* </div> */}
        <Route exact path="/AddProductForm" element={<AddProductForm/>}/>
        {/* <Route exact path="/signup" element={<Signup/>}/> */}
      </Routes>
     </BrowserRouter>  

       {/* <AddProductForm /> */}
    </div>
  );
}

export default App;
