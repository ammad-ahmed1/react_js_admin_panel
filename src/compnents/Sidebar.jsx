import React, { createContext } from 'react'
import { useState, useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navs from './Navs';
import '../compnents/styles/SidebarStyle.css'
const Context = createContext();
const Sidebar = ({show, handleshow, handleclose}) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => {
  //   console.log('Funciton called!');
  //   setShow(true);
  // }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}
      {/* <Offcanvas show={show} handleclose>
        <Offcanvas.Header closeButton onHide={handleclose}>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
      <Offcanvas className = 'sidebar'  show={show} onHide = {handleclose}>
      <h5 className='sidebar-heading'>Admin panel</h5>
      <ul>
        
        <li>Men Shirts</li>
        <li>Men T-shirts</li>
        <li>Women Shirts</li>
        <li>Women T-shirts</li>

      </ul>
      </Offcanvas>
      




    </>
  );
}

export default Sidebar