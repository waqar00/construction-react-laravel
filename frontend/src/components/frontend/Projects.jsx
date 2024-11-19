import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import projectImage from '../../assets/images/construction10.jpg';
import { apiUrl, fileUrl } from '../common/http';
import { useLoaderData } from 'react-router-dom';

const Projects = () => {
  const projects = useLoaderData();
  // const [projects, setProjects] = useState([]);
  // const fetchAllProjects = async () => {
  //   const res = await fetch(apiUrl + 'get-all-projects');
  //   const result = await res.json();
  //   console.log(result)
  //   if (result.status == true) {
  //     setProjects(result.data);
  //   }
  // }
  // useEffect(() => {
  //   fetchAllProjects();
  // }, [])
  return (
    <>
      <Hero
        preHeading='Quality. Integrity. Value.'
        heading={'Projects'}
        text={'Crafting dreams with precision and excellence'}
      />
      <section className='section-3 py-5'>
        <div className='container py-5'>
          <div className='section-header text-center'>
            <span>Our Projects</span>
            <h2 >Our Projects services</h2>
            <p>Crafting dreams with precision and excellence</p>
          </div>
          <div className='row'>
            {
              projects && projects.map((project) => {
                return (
                  <div className="col-md-4">
                    <div className="item">
                      <div className="service-image">
                        {
                          project.image && <img className='w-100' src={fileUrl + 'images/projects/' + project.image.url} alt="" />
                        }
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{project.title}</h3>
                        </div>
                        <div className="service-content">
                          <p>
                            {project.short_desc}
                          </p>
                        </div>
                        <a href='' className='btn btn-primary'>Read More</a>
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

const fetchAllProjects = async() =>{
  const res = await fetch(apiUrl + 'get-all-projects');
  const result = await res.json();
  console.log(result)
  if (result.status == true) {
    return (result.data);
  }
}
export  {Projects as default , fetchAllProjects}