import React, { useEffect, useState } from 'react'
import teamImg from '../../assets/images/team1.jpg';
import { default as AboutNew } from '../common/About'
import Hero from '../common/Hero';
import { apiUrl } from '../common/http';
import Team from '../common/Team';
import Testimonial from './Testimonial';
const About = () => {
  return (
    <>
      <Hero preHeading={'Quality. Integrity. Value. '} heading={'About Us'} text={'Crafting dreams with precision and excellence'} />
      <AboutNew />
      {/* Out Team */}
      <Team/>
      <Testimonial/>
    </>

  )
}

export default About