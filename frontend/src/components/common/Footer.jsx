import React from 'react'

const Footer = () => {
  return (
<footer className='text-white'>
    <div className='container py-5'>
      <div className="row">
        <div className="col-md-3">
          <h3 className='mb-3'>Arab Constructions</h3>
          <div className="pe-3">
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to    demonstrate the visual form of a document or a typeface without relying on meaningful content.
          </p>
          </div>
        </div>
        <div className="col-md-3">
        <h3 className='mb-3'>Our Services</h3>
          <ul>
            <li>
              <a href='/projects'>Specility Construction</a>
            </li>
            <li>
              <a href='/projects'>Civil Construction</a>
            </li>
            <li>
              <a href='/projects'>Residential Construction</a>
            </li>
            <li>
              <a href='/projects'>Coorporate Construction</a>
            </li>
            <li>
              <a href='/projects'>Bussines Construction</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
        <h3 className='mb-3'>Quick Likns</h3>
          <ul>
            <li>
              <a href='/about'>About us</a>
            </li>
            <li>
              <a href='/services'>Services</a>
            </li>
            <li>
              <a href='/projects'>Projects</a>
            </li>
            <li>
              <a href='/blogs'>Blogs</a>
            </li>
            <li>
              <a href='/contact-us'>Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
        <h3 className='mb-3'>Contact Us</h3>
          <ul>
            <li>
              <a href='#'>abc@abc.com</a>
            </li>
            <li>
              <a href='#'>(971-1111111155|)</a>
            </li>
            <li>
              <a href='#'>Abu Dhabi , United Arab Emirates</a>
            </li>
          </ul>
        </div>
        <hr/>
        <div className='text-center pt-3'>Copyright © 2024 ArabEdge Construction. All rights reserved.</div>
      </div>
    </div>
   </footer>
  )
}

export default Footer