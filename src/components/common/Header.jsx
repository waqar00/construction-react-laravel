import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <div className="container py-3">
    <Navbar expand="lg">
          <Navbar.Brand href="/" className='logo'>
            <span>Arab </span>
             Constructions
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className='nav-link'>Home</NavLink>
              <NavLink to="/about" className='nav-link'>About us</NavLink>
              <Nav.Link to="#link" className='nav-link'>Services</Nav.Link>
              <Nav.Link to="#link" className='nav-link'>Projects</Nav.Link>
              <Nav.Link to="#link" className='nav-link'>Blogs</Nav.Link>
              <Nav.Link to="#link" className='nav-link'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
   </header>
  )
}

export default Header