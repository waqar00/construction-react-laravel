import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import blogImage from '../../assets/images/construction2.jpg';
import { apiUrl, fileUrl } from '../common/http';
const Blogs = () => {
  const [blogs ,setBlogs] = useState([]);
  const fetchAllBlogs = async () =>{
    const res = await fetch(apiUrl + 'get-all-blogs');
    const result = await res.json();
    setBlogs(result.data);
  }
  useEffect(() => {
    fetchAllBlogs();
}, [])
  return (
   <>
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
            {
              blogs && blogs.map((blog) => {
                return (
                  <div className="col-md-4">
                  <div className="card shadow border-0">
                  <div className="card-img-top">
                    {
                      blog.image && <img src={fileUrl + 'images/blogs/' + blog.image?.url} className='w-100'
                      style={{ height: '200px', objectFit: 'cover' }}
                      />
                    }
                   </div>
                   <div className="card-body p-4">
                    <div className='mb-3'>
                     <a href='#' className='title'>Dummy Title Here</a>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                   </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
       </section>
   </>
  )
}

export default Blogs