import React, { useEffect, useState } from 'react'
import Footer from '../../common/Footer'
import { Link } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import { apiUrl, fileUrl, token } from '../../common/http'
import { toast } from 'react-toastify'

const Show = () => {
    const [blogs,setBlogs] = useState([]);
    const fetchBlogs =async () =>{
        const res = await fetch(apiUrl + 'blogs',{
            'method':'GET',
            'headers':{
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });
        const result = await res.json();
        if (result.status == true)
        {
            setBlogs(result.data);
        }
    }
    const deleteBlog =async (id) =>{
        const res = await fetch(apiUrl +'blogs/' + id,{
            'method':'DELETE',
            'headers':{
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            } 
        });
        const result = await res.json();
        if(result.status == true){
            const newBlogs = blogs.filter( blog => blog.id != id);
            setBlogs(newBlogs);
            toast.success(result.message)
        }else{
            toast.error(result.error)
        }
    }
    useEffect(()=>{
       fetchBlogs();
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
                                        <h4 className='h5'>Blogs</h4>
                                        <Link to="/admin/blog/create" className='btn btn-primary'>Create</Link>
                                    </div>
                                    <hr />
                                    <table className="table table-responsive table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Author</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                blogs && blogs.map(blog =>{
                                                    return(
                                                    <tr key={`blog-${blog.id}`}>
                                                        <td>{ blog.id}</td>
                                                        <td>
                                                            {
                                                 blog.image 
                                                 && <img className='w-50 rounded' src={fileUrl + 'images/blogs/' + blog.image.url} alt="" />
                                                       }
                                                        </td>
                                                        <td>{ blog.title}</td>
                                                        <td>{ blog.slug}</td>
                                                        <td>
                                                            { 
                                                              (blog.status == 1) ? 'Active' : 'Block'
                                                             }
                                                         </td>
                                                         <td >
                                                            <Link to={`/admin/blogs/edit/${blog.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                            <Link href="#" onClick={() => deleteBlog(blog.id)}  className='btn btn-secondry btn-sm ms-2'>Delete</Link>
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