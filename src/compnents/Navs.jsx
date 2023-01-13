import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../compnents/styles/NavStyle.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navs = ({ handleshow, toggleShow }) => {

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" aria-controls='basic-navbar nav' bg='dark' className='navbar' >
        <Container>
          <button className='btn btn-#5F0A87 text-white' color='white' onClick={handleshow}>
            ≡
          </button>
          <Navbar.Brand href="#home" className=' text-white'>Admin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className=' text-white'>
              <DropdownButton id="dropdown-item-button" title="Men">
                <Dropdown.Item as="button">Shirts</Dropdown.Item>
                <Dropdown.Item as="button">T-shirts</Dropdown.Item>
                <Dropdown.Item as="button">Jackets</Dropdown.Item>
                <Dropdown.Item as="button">Pants</Dropdown.Item>
              </DropdownButton>
            </Nav.Link>
            <Nav.Link href="#features" className=' text-white'>
              <DropdownButton id="dropdown-item-button" title="Women">
                <Dropdown.Item as="button">Jackets</Dropdown.Item>
                <Dropdown.Item as="button">Shrugs</Dropdown.Item>
                <Dropdown.Item as="button">Shawls</Dropdown.Item>
                <Dropdown.Item as="button">Denims</Dropdown.Item>
              </DropdownButton>
            </Nav.Link>
            <Nav.Link href="#pricing" className=' text-white'>
              <DropdownButton id="dropdown-item-button" title="Kids">
                <Dropdown.Item as="button">Shorts</Dropdown.Item>
                <Dropdown.Item as="button">Pants</Dropdown.Item>
                <Dropdown.Item as="button">Summer</Dropdown.Item>
                <Dropdown.Item as="button">Winter</Dropdown.Item>
              </DropdownButton>
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>



    </div>
  )
}

export default Navs