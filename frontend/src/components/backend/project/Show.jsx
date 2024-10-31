import React, { useEffect, useState } from 'react'
import Footer from '../../common/Footer'
import { Link } from 'react-router-dom'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import { apiUrl, token } from '../../common/http'
import { toast } from 'react-toastify'

const Show = () => {
    const [projects ,setProjects] = useState([]);
    const fetchAllProjects = async () =>{
        const res = await fetch(apiUrl + 'projects',{
            'method':'GET',
            'headers':{
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        })
        const result =await res.json();
        console.log(result)
        setProjects(result.data);
    }
        //Delete project
        const deleteProject =async (id) =>{
            if(confirm('Are you sure you want to delete Project')){
                const res =await fetch(apiUrl + 'projects/' + id ,{
                    'method' : 'DELETE',
                    'headers' : {
                        'Authorization' : `Bearer ${token()}`
                    } 
                })
                const result = await res.json();
                if(result.status = true){
                    const newProject = projects.filter(project => project.id != id);
                    setProjects(newProject);
                    toast.success(result.message);
                  }else{
                   toast.error(result.message)
                  }
            }
        }
    useEffect(()=>{
        fetchAllProjects();
    },[])
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
                                        <h4 className='h5'>Projects</h4>
                                        <Link to="/admin/projects/create" className='btn btn-primary'>Create</Link>
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
                                                projects && projects.map(project =>{
                                                    return(
                                                    <tr key={`project-${project.id}`}>
                                                        <td>{ project.id}</td>
                                                        <td>{ project.title}</td>
                                                        <td>{ project.slug}</td>
                                                        <td>
                                                            { 
                                                              (project.status == 1) ? 'Active' : 'Block'
                                                             }
                                                         </td>
                                                         <td >
                                                            <Link to={`/admin/projects/edit/${project.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                            <Link href="#" onClick={() => deleteProject(project.id)}  className='btn btn-secondry btn-sm ms-2'>Delete</Link>
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

export default Show