import React, { useEffect } from 'react'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import { useState } from 'react'
import { apiUrl, token } from '../../common/http'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ShowServices = () => {
    const navigate = useNavigate();
    const [services , setServices] = useState([]);
    const fetchServices =async () => {
        const res =await fetch(apiUrl + 'services',{
            'method' : 'GET',
            'headers' : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });
       const result =await res.json();
       setServices(result.data);
    }
    //Delete Service
    const deleteService =async (id) =>{
        if(confirm('Are you sure you want to delete services')){
            const res =await fetch(apiUrl + 'services/' + id ,{
                'method' : 'DELETE',
                'headers' : {
                    'Authorization' : `Bearer ${token()}`
                } 
            })
            const result = await res.json();
            if(result.status = true){
                const newService = services.filter(service => service.id != id);
                setServices(newService);
                toast.success(result.message);
              }else{
               toast.error(result.message)
              }
        }
    }
    useEffect(() => {
        fetchServices();
    },[]);
    return (
        <>
            <Header />
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
                                        <h4 className='h5'>Services</h4>
                                        <Link to="/admin/showServices/create" className='btn btn-primary'>Create</Link>
                                    </div>
                                    <hr />
                                    <table className="table table-responsive table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Slug</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                services && services.map(service =>{
                                                    return(
                                                    <tr key={`service-${service.id}`}>
                                                        <td>{ service.id}</td>
                                                        <td>{ service.title}</td>
                                                        <td>{ service.slug}</td>
                                                        <td>
                                                            { 
                                                              (service.status == 1) ? 'Active' : 'Block'
                                                             }
                                                         </td>
                                                         <td>
                                                            <Link to={`/admin/showServices/edit/${service.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                            <Link href="#" onClick={() => deleteService(service.id)}  className='btn btn-secondry btn-sm ms-2'>Delete</Link>
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
            <Footer />
        </>
    )
}

export default ShowServices