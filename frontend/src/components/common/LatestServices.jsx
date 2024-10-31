import React, {useState ,useEffect} from 'react'
import { apiUrl,fileUrl } from './http';

const LatestServices = () => {
    const [services , setServices] = useState([])
const getLatetsServices = async () => {
  const res = await fetch(apiUrl + 'get-latest-services?limit=4');
  const result = await res.json();
  console.log(result);
  setServices(result.data);
}
useEffect(()=>{
  getLatetsServices(); 
},[])
  return (
    <section className='section-3 py-5'>
    <div className='container-fluid py-5'>
     <div className='section-header text-center'>
       <span>Our services</span>
       <h2 >Our Construction services</h2>
       <p>Crafting dreams with precision and excellence</p>
       </div>
      <div className='row'>
        {
            services && services.map((service)=>{
                return (
                <div key={`service-${service.id}`} className="col-md-3 col-lg-4">
                    <div className="item">
                      <div className="service-image">
                      {/* {
                        service.image && <img className='w-100' src={fileUrl + 'images/services/' + service.image.url} alt="" />
                      } */}
                        <img src={`${fileUrl}images/services/${service.image?.url}`} alt='No image' className='w-100'/>
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{ service.title}</h3>
                        </div>
                        <div className="service-content">
                          <p>{ service.short_desc}
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
  )
}

export default LatestServices