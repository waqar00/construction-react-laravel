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
              <NavLink to="/services" className='nav-link'>Services</NavLink>
              <NavLink to="/projects" className='nav-link'>Projects</NavLink>
              <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
              <NavLink to="/contact-us" className='nav-link'>Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
   </header>
  )
}

export default Header