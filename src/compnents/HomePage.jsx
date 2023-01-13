import React from 'react'
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
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './compnents/Navigation';
const HomePage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      console.log('Funciton called!');
      setShow(true);
    }
  
    const toggleShow =() => setShow(!show)
    return (
      <div className="App">
        <Navs handleshow={handleShow}/>
        <Sidebar show={show} handleshow = {handleShow} handleclose = {handleClose}/>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route exact path="/AddProductForm" element={<AddProductForm/>}/>
        </Routes>
       </BrowserRouter>  
      </div>
    );
}

export default HomePage