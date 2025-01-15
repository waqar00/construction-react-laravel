import React, { useEffect, useState } from 'react'
import Hero from '../common/Hero'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Testimonial from './Testimonial'
import { apiUrl, fileUrl } from '../common/http'

const ProjectDetails = () => {
        const params = useParams();
        const [project, setProject] = useState({});
        const fetchDetails = async () =>{
            const res = await fetch(apiUrl + 'project-details/' + params.slug);
            const result = await res.json();
            setProject(result.data);
        }
        useEffect(()=>{
            fetchDetails();
         },[])
  return (
    <>
    <Hero preHeading={'Quality. Integrity. Value. '} heading={ project.title }  />
      <section className='section-10'>
        <div className='container py-5'>
          <div className="row">
            <div className="col-md-4 sidebar">
              <div className="card shadow border-0">
                <div className="card-body">
                <h3 className='mt-2 mb-3'>Insights</h3>
                <ul>
                    {
                     project.location && 
                     <li className='mb-2'>
                        <span className='text-body-secondary'>Location</span>
                        <p>{project.location}</p>
                     </li>   
                    }
                    {
                     project.construction_type && 
                     <li className='mb-2'>
                        <span className='text-body-secondary'>Construction Type</span>
                        <p>{project.construction_type}</p>
                     </li>   
                    }
                   {
                     project.sector && 
                     <li className='mb-2'>
                        <span className='text-body-secondary'>Sector</span>
                        <p>{project.sector}</p>
                     </li>   
                    }
                </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8 pt-2">
              <div className="projects-details">
                <div className="projects-image">
                  {
                    project.image && <img src={`${fileUrl}images/projects/${project.image?.url}`} className='w-100' />
                  }
                </div>
                <div className="projects-body">
                  <div className="projects-title">
                    <h3 className='py-3'>{ project.title }</h3>
                  </div>
                  <div dangerouslySetInnerHTML={ {__html: project.content}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-light py-5'>
        <Testimonial/>
      </section>
    </>
  )
}
export default ProjectDetails