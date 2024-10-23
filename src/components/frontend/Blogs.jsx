import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import blogImage from '../../assets/images/construction2.jpg';
const Blogs = () => {
  return (
   <>
   <Header/>
   <Hero
        preHeading='Quality. Integrity. Value.'
        heading={'Blogs'}
        text={'Crafting dreams with precision and excellence'}
    />
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
   <Footer/>
   </>
  )
}

export default Blogs