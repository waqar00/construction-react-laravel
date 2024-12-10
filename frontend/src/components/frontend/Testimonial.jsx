import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination} from 'swiper/modules';
import avatarImg from '../../assets/images/author-2.jpg';
import { apiUrl, fileUrl } from '../common/http';

const Testimonial = () => {
    const [tesitimonials , setTestimonials] = useState([])
    const fetchTestimonials = async () => {
        const res =await fetch(apiUrl + 'get-all-testimonial');
        const result = await res.json();
        setTestimonials(result.data);
    }
    useEffect(()=>{
        fetchTestimonials();
    },[])
  return (
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
        {
            tesitimonials && tesitimonials.map((tesitimonial)=>{
                return (
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
                            <p>{tesitimonial.testimonial}</p>
                        </div>
                        <hr/>
                        <div className="d-flex">
                            <div>
                        <img src={`${fileUrl}images/testimonials/${tesitimonial.image?.url}`} alt='No image' className='w-100'/>
                            </div>
                            <div className='ps-3'>
                            <div className='name'>{tesitimonial.citation}</div>
                            <div>Developer</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                )

            })
        }

        </Swiper>
  </section>
  )
}

export default Testimonial