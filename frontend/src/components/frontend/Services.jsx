import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import serviceImage from '../../assets/images/construction1.jpg';
import { apiUrl, fileUrl } from '../common/http';
import { Link, useLoaderData } from 'react-router-dom';


const Services = () => {
  const services = useLoaderData();
  // const [services, setServices] = useState([]);
  // const fetchAllServices = async () => {
  //   const res = await fetch(apiUrl + 'get-all-services');
  //   const result = await res.json();
  //   setServices(result.data);
  // }
  // useEffect(() => {
  //   fetchAllServices()
  // }, [])
  return (
    <>
      <Hero
        preHeading='Quality. Integrity. Value.'
        heading={'Services'}
        text={'Crafting dreams with precision and excellence'}
      />
      <section className='section-3 py-5'>
        <div className='container py-5'>
          <div className='section-header text-center'>
            <span>Our services</span>
            <h2 >Our Construction services</h2>
            <p>Crafting dreams with precision and excellence</p>
          </div>
          <div className='row'>
            {
              services && services.map((service) => {
                return (
                <div key={`service-${service.id}`} className="col-md-4">
                  <div className="item">
                    <div className="service-image">
                      <img src={`${fileUrl}images/services/${service.image?.url}`} className='w-100' />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{ service.title}</h3>
                      </div>
                      <div className="service-content">
                        <p>
                          { service.short_desc}
                        </p>
                      </div>
                      <Link to={'/services/' + service.slug} className='btn btn-primary'>Read More</Link>
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
const fetchAllServices = async () =>{
  const res = await fetch(apiUrl + 'get-all-services');
  const result = await res.json();
  return result.data;
}
export { Services as default , fetchAllServices }
