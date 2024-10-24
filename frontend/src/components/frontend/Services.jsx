import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import serviceImage from '../../assets/images/construction1.jpg';


const Services = () => {
    return (
        <>
            <Header />
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
              <div className="col-md-4">
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
              <div className="col-md-4">
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
              <div className="col-md-4">
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
              <div className="col-md-4">
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
              <div className="col-md-4">
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
              <div className="col-md-4">
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
            <Footer />
        </>
    )
}

export default Services