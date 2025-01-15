import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { apiUrl, fileUrl } from '../common/http';
import Hero from '../common/Hero';
import Testimonial from './Testimonial';

const ServiceDetails = () => {
    const services = useLoaderData();
    const params = useParams();
    const [service, setService] = useState({});
    const fetchDetails = async () =>{
        const res = await fetch(apiUrl + 'service-details/' + params.slug);
        const result = await res.json();
        setService(result.data);
        console.log(result)
    }
    useEffect(()=>{
        fetchDetails();
     },[params.slug])
  return (
   <>
      <Hero preHeading={'Quality. Integrity. Value. '} heading={ service.title }  />
      <section className='section-10'>
        <div className='container py-5'>
          <div className="row">
            <div className="col-md-3 sidebar">
              <div className="card shadow border-0">
                <div className="card-body">
                <h3 className='mt-2 mb-3'>Our Services</h3>
                <ul>
                  {
                    services && services.map((service) => {
                      return (
                        <li key={`service-${service.id}`}>
                          <Link to={`/services/${service.slug}`}>{ service.title }</Link>
                        </li>
                      )
                    })
                  }
                </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 pt-2">
              <div className="service-details">
                <div className="service-image">
                  {
                    service.image && <img src={`${fileUrl}images/services/${service.image?.url}`} className='w-100' />
                  }
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3 className='py-3'>{ service.title }</h3>
                  </div>
                  <div dangerouslySetInnerHTML={ {__html: service.content}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Testimonial/>
            </div>
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
export {ServiceDetails as default , fetchAllServices}