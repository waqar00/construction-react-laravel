import React, { useEffect, useState } from 'react'
import { apiUrl, fileUrl } from './http';
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const fetchBlogs = async () => {
        const res = await fetch(apiUrl + 'get-latest-blogs?limit=4');
        const result = await res.json();
        setBlogs(result.data)
    }
    useEffect(() => {
        fetchBlogs();
    }, [])
    return (
        <>
            <section className='section-6 bg-light py-5'>
                <div className='container'>
                    <div className='section-header text-center'>
                        <span>Blog & News</span>
                        <h2 >Articles & Blog Posts</h2>
                        <p>Crafting dreams with precision and excellence</p>
                    </div>
                    <div className="row pt-4">
                        {blogs && blogs.map((blog) => (
                            <div className="col-md-4 mb-4" key={`blog-${blog.id}`}>
                                <div className="card shadow border-0 h-100">
                                    {blog.image && (
                                        <img
                                            src={`${fileUrl}images/blogs/${blog.image?.url}`}
                                            alt={blog.title}
                                            className="card-img-top"
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                    )}
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{blog.title}</h5>
                                        <Link to={`details/${blog.id}`} className='btn btn-primary'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default LatestBlogs