import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../compnents/styles/navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h4>FashionStore</h4>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <button className='btn btn-secondary'>Menu</button>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                        </li>
                        <li>
                            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar