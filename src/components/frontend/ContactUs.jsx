import React from 'react'
import Header from '../common/Header'
import Hero from '../common/Hero'
import Footer from '../common/Footer'

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading='Quality. Integrity. Value.'
          heading={'Contact us'}
          text={'Crafting dreams with precision and excellence'}
        />
        <section className='section-9 py-5'>
          <div className="container">
            <div className='section-header text-center'>
              <h1>Contact US</h1>
              <p>Crafting dreams with precision and excellence </p>
            </div>
              <div className="row mt-5">
                <div className="col-md-3 mb-3">
                  <div className="card shadow-lg border-0 ">
                    <div className="card-body p-4">
                      <h3>Call Us</h3>
                      <div><a href=''>(888-888-000)</a></div>
                      <div>
                        <a href=''>(888-828-111)</a>
                      </div>
                      <h3 className='mt-4'>You can write us</h3>
                      <div><a href=''>tset@test.com</a></div>
                      <div><a href=''>tset@test.com</a></div>
                      <h3>Address</h3>
                      <div>
                        Abu Dhabi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="car-body p-5">
                      <form action="" className='form'>
                        <div className="row">
                          <div className="col-md-6 mb-3 mb-3">
                            <label htmlFor='' className='form-label'>Name</label>
                            <input type='text' className='form-control form-control-lg' placeholder='Enter Your Name?' />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className='form-label'>Email</label>
                            <input type='email' className='form-control form-control-lg' placeholder='Enter Your Email?' />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className='form-label'>Phone</label>
                            <input type='text' className='form-control form-control-lg' placeholder='Enter Phone no.?' />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className='form-label'>Subject</label>
                            <input type='text' className='form-control form-control-lg' placeholder='Enter Subject?' />
                          </div>
                        </div>
                        <div>
                          <label className='form-label'>Message</label>
                          <textarea className='form-control form-control-lg' placeholder='Enter Message?' rows={5} ></textarea>
                        </div>
                        <button className='btn btn-primary large mt-3'>Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </>

  )
}

export default ContactUs