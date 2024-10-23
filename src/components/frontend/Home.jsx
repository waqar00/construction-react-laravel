import React from 'react'
import Container from 'react-bootstrap/Container';
import serviceImage from '../../assets/images/construction1.jpg';
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
const Home = () => {
  return (
    <>
    <Header/>
     <main>
       <section className='section-1'>
         <div className='hero d-flex align-items-center text-white'>
           <div className='container-fluid'>
              <div className='text-center '>
                <span>Welcome Amaizing Construction</span>
                <h1>Crafting dreams with<br/> precision and excellence</h1>
                <p>Crafting dreams with precision and excellence </p>
                <a className='btn btn-primary large'>Contact Now</a>
                <a className='btn btn-secondry large'>View Projects</a>
              </div>
           </div>
         </div>
       </section>
       {/* About us */}
       <About/>
       {/* Our Services */}
       <section className='section-3 py-5'>
         <div className='container-fluid py-5'>
          <div className='section-header text-center'>
            <span>Our services</span>
            <h2 >Our Construction services</h2>
            <p>Crafting dreams with precision and excellence</p>
            </div>
           <div className='row'>
              <div className="col-md-3">
                <div className="item">
                  <div className="service-image">
                    <img src={serviceImage} className='w-100'/>
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>Crafting dreams with precision and excellence
                      Crafting dreams with precision and excellence
                      </p>
                    </div>
                    <a href='' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="service-image">
                    <img src={serviceImage} className='w-100'/>
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>Crafting dreams with precision and excellence
                      Crafting dreams with precision and excellence
                      </p>
                    </div>
                    <a href='' className='btn btn-primary '>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="service-image">
                    <img src={serviceImage} className='w-100'/>
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>Crafting dreams with precision and excellence
                      Crafting dreams with precision and excellence
                      </p>
                    </div>
                    <a href='' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="service-image">
                    <img src={serviceImage} className='w-100'/>
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Speciality Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>Crafting dreams with precision and excellence
                      Crafting dreams with precision and excellence
                      </p>
                    </div>
                    <a href='' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </section>
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
       <section className='section-3 py-5'>
         <div className='container-fluid py-5'>
          <div className='section-header text-center'>
            <span>Our Projects</span>
            <h2 >Our Projects services</h2>
            <p>Crafting dreams with precision and excellence</p>
            </div>
           <div className='row'>
              <div className="col-md-3">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImage} className='w-100'/>
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Dubai Projects</h3>
                    </div>
                    <div className="service-content">
                      <p>Crafting dreams with precision and excellence
                      Crafting dreams with precision and excellence
                      </p>
                    </div>
                    <a href='' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImage} className='w-100'/>
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Abu Dhabi Projects</h3>
                    </div>
                    <div className="service-content">
                      <p>Crafting dreams with precision and excellence
                      Crafting dreams with precision and excellence
                      </p>
                    </div>
                    <a href='' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImage} className='w-100'/>
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Ajman projects</h3>
                    </div>
                    <div className="service-content">
                      <p>Crafting dreams with precision and excellence
                      Crafting dreams with precision and excellence
                      </p>
                    </div>
                    <a href='' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImage} className='w-100'/>
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Sharjah Projects</h3>
                    </div>
                    <div className="service-content">
                      <p>Crafting dreams with precision and excellence
                      Crafting dreams with precision and excellence
                      </p>
                    </div>
                    <a href='' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </section>
       {/* Our tesitimonial */}
       <section className="section-5 py-5">
         <div className="container">
         <div className='section-header text-center'>
            <span>Testimonials</span>
            <h2 >What people are saying about us</h2>
            <p>Crafting dreams with precision and excellence</p>
          </div>
         </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            modules={[ Pagination]}
          >
            <SwiperSlide>
              <div className='card shadow border-0'>
                <div className="card-body p-5">
                  <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <div className="content pt-4 pb-2">
                       <p>A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement</p>
                    </div>
                    <hr/>
                    <div className="d-flex">
                      <div>
                        <img src={avatarImg} width={50}/>
                      </div>
                      <div className='ps-3'>
                        <div className='name'>Waqar Ahamd</div>
                        <div>Developer</div>
                      </div>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card shadow border-0'>
                <div className="card-body p-5">
                  <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <div className="content pt-4 pb-2">
                       <p>A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement</p>
                    </div>
                    <hr/>
                    <div className="d-flex">
                      <div>
                        <img src={avatarImg} width={50}/>
                      </div>
                      <div className='ps-3'>
                        <div className='name'>Waqar Ahamd</div>
                        <div>Developer</div>
                      </div>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card shadow border-0'>
                <div className="card-body p-5">
                  <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <div className="content pt-4 pb-2">
                       <p>A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement</p>
                    </div>
                    <hr/>
                    <div className="d-flex">
                      <div>
                        <img src={avatarImg} width={50}/>
                      </div>
                      <div className='ps-3'>
                        <div className='name'>Waqar Ahamd</div>
                        <div>Developer</div>
                      </div>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card shadow border-0'>
                <div className="card-body p-5">
                  <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <div className="content pt-4 pb-2">
                       <p>A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement</p>
                    </div>
                    <hr/>
                    <div className="d-flex">
                      <div>
                        <img src={avatarImg} width={50}/>
                      </div>
                      <div className='ps-3'>
                        <div className='name'>Waqar Ahamd</div>
                        <div>Developer</div>
                      </div>
                    </div>
                </div>
              </div>
            </SwiperSlide>
              </Swiper>
       </section>
       {/* Our logs */}
       <section className='section-6 bg-light py-5'>
        <div className='container'>
         <div className='section-header text-center'>
            <span>Blog & News</span>
            <h2 >Articles & Blog Posts</h2>
            <p>Crafting dreams with precision and excellence</p>
          </div>
          <div className="row pt-4">
            <div className="col-md-4">
              <div className="card shadow border-0">
              <div className="card-img-top">
                 <img src={blogImage} className='w-100'/>
               </div>
               <div className="card-body p-4">
                <div className='mb-3'>
                 <a href='#' className='title'>Dummy Title Here</a>
                </div>
                <a href='#' className='btn btn-primary small'>Read More</a>
               </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0">
              <div className="card-img-top">
                 <img src={blogImage} className='w-100'/>
               </div>
               <div className="card-body p-4">
                <div className='mb-3'>
                 <a href='#' className='title'>Dummy Title Here</a>
                </div>
                <a href='#' className='btn btn-primary small'>Read More</a>
               </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0">
              <div className="card-img-top">
                 <img src={blogImage} className='w-100'/>
               </div>
               <div className="card-body p-4">
                <div className='mb-3'>
                 <a href='#' className='title'>Dummy Title Here</a>
                </div>
                <a href='#' className='btn btn-primary small'>Read More</a>
               </div>
              </div>
            </div>
          </div>
        </div>
       </section>
     </main>
     <Footer/>
    </>
  )
}

export default Home