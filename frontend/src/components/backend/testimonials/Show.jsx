import React, { useEffect, useState } from 'react'
import Sidebar from '../../common/Sidebar'
import { Link, useParams } from 'react-router-dom'
import { apiUrl, fileUrl, token } from '../../common/http'
import { toast } from 'react-toastify'

const Show = () => {
    const params = useParams();
    const [testimonials , setTestimonials] =useState([]);
    const fetchTestimonials = async () => {
        try {
            const res = await fetch(apiUrl + 'testimonials', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            if (result.status === true) {
                setTestimonials(result.data);
            } else {
                // Handle failure (if necessary)
                console.error("Failed to fetch testimonials:", result.message);
            }
        } catch (error) {
            // Handle any errors (network issues, invalid JSON, etc.)
            console.error("Error fetching testimonials:", error);
        }
    };
    
    const deleteTestimonial = async (id) =>{
          if(confirm('Are you sure you want to delete')){
             const res = await fetch(apiUrl + 'testimonials/' + id ,{
                method : 'DELETE',
                headers : {
                    'Authorization' : `Bearer ${token()}`
                }
             })
             const result = await res.json();
             if(result.status = true){
                 const newProject = testimonials.filter(testimonial => testimonial.id != id);
                 setTestimonials(newProject);
                 toast.success(result.message);
               }else{
                toast.error(result.message)
               }
          }
    }
    useEffect(()=>{
        fetchTestimonials();
    },[])
  return (
<main>
    <div className="container my-5">
        <div className="row">
            <div className='col-md-3'>
                {/* sideBar */}
                <Sidebar />
            </div>
            <div className='col-md-9'>
                <div className="card shadow-lg border-0">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between">
                            <h4 className='h5'>Testimonials</h4>
                            <Link to="/admin/testimonial/create" className='btn btn-primary'>Create</Link>
                        </div>
                        <hr />
                        <table className="table table-responsive table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Testimonials</th>
                                    <th>Citation</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    testimonials && testimonials.map(testimonial =>{
                                        return(
                                        <tr key={`testimonial-${testimonial.id}`}>
                                            <td>{ testimonial.id}</td>
                                            <td>
                                                {
                                     testimonial.image 
                                     && <img className='w-50 rounded' src={fileUrl + 'images/testimonials/' + testimonial.image.url} alt="" />
                                           }
                                            </td>
                                            <td>{ testimonial.citation}</td>
                                            <td>{ testimonial.testimonial}</td>
                                            <td>
                                                { 
                                                  (testimonial.status == 1) ? 'Active' : 'Block'
                                                 }
                                             </td>
                                             <td >
                                                <Link to={`/admin/testimonial/edit/${testimonial.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                <Link href="#" onClick={() => deleteTestimonial(testimonial.id)}  className='btn btn-secondry btn-sm ms-2'>Delete</Link>
                                             </td>
                                            
                                        </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default Show