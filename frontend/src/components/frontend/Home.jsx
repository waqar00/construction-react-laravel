import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import blogImage from '../../assets/images/construction2.jpg';
import projectImage from '../../assets/images/construction10.jpg';
import icon1 from '../../assets/images/icon-1.svg';
import icon2 from '../../assets/images/icon-2.svg';
import icon3 from '../../assets/images/icon-3.svg';
import avatarImg from '../../assets/images/author-2.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import About from '../common/About';
import LatestServices from '../common/LatestServices';
import LatestProjects from '../common/LatestProjects';
import LatestBlogs from '../common/LatestBlogs';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';
const Home = () => {

  return (
    <>
    {/* <Header/> */}
     <main>
       <section className='section-1'>
         <div className='hero d-flex align-items-center text-white'>
           <div className='container-fluid'>
              <div className='text-center '>
                <span>Welcome Amaizing Construction</span>
                <h1>Crafting dreams with<br/> precision and excellence</h1>
                <p>Crafting dreams with precision and excellence </p>
                <Link to='/contact-us' className='btn btn-primary large'>Contact Now</Link>
                <Link to={`/projects`} className='btn btn-secondry large'>View Projects</Link>
              </div>
           </div>
         </div>
       </section>
       {/* About us */}
       <About/>
       {/* Our Services */}
       <LatestServices/>
       {/* why chose us */}
       <div className="section-4 py-5">
         <div className="container py-5">
         <div className='section-header text-center'>
            <span>Why Chose Us</span>
            <h2 >Discover our diverse range of projects</h2>
            <p>Crafting dreams with precision and excellence</p>
          </div>
          <div className="row pt-4">
            <div className="col-md-4">
              <div className="card shadow border-0 p-4">
                <div className="card-icon">
                  <img src={icon1}/>
                </div>
                <div className="card-title mt-3">
                  <h3>Cutting Edge Solutions</h3>
                </div>
                <p>Crafting dreams with precision and excellence
                    Crafting dreams with precision and excellence
                    Crafting dreams with precision and excellence
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0 p-4">
                <div className="card-icon">
                  <img src={icon2}/>
                </div>
                <div className="card-title mt-3">
                  <h3>Cutting Edge Solutions</h3>
                </div>
                <p>Crafting dreams with precision and excellence
                    Crafting dreams with precision and excellence
                    Crafting dreams with precision and excellence
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0 p-4">
                <div className="card-icon">
                  <img src={icon3}/>
                </div>
                <div className="card-title mt-3">
                  <h3>Cutting Edge Solutions</h3>
                </div>
                <p>Crafting dreams with precision and excellence
                    Crafting dreams with precision and excellence
                    Crafting dreams with precision and excellence
                </p>
              </div>
            </div>
          </div>
         </div>
       </div>
       {/* Our Projects */}
       <LatestProjects/>
       {/* Our tesitimonial */}
       <Testimonial/>
       {/* Our logs */}
       <LatestBlogs/>
     </main>
     {/* <Footer/> */}
    </>
  )
}

export default Home