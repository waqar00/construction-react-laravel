import React from 'react'
import AboutImage from '../../assets/images/about-us.jpg';

const About = () => {
  return (
    <section className='section-2 py-4'>
    <div className='container '>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-4'>
         <img src={AboutImage} className='w-100'/>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4'>
          <span>About us</span>
          <h3>Lipsum generator:All the facts</h3>
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
         </div>
      </div>
    </div>
  </section>
  
  )
}

export default About