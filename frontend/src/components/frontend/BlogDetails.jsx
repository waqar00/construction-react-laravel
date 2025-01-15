import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { apiUrl, fileUrl } from '../common/http'
import Hero from '../common/Hero'

const BlogDetails = () => {
    const params = useParams();
    const blogs = useLoaderData()
    const [blog, setBlog] = useState({});
    const fetchDetails = async () => {
        const res = await fetch(apiUrl + 'blog-details/' + params.slug);
        const result = await res.json();
        setBlog(result.data);
    }
    useEffect(() => {
        fetchDetails();
    }, [params.slug])
  return (
    <>
    <main>
        <Hero preHeading={'Quality, Integrity, Value.'} heading={'Blog & News'} />
        <section className='section-11'>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8">
                    <h2>{ blog.title }</h2>
                    <div className='pb-3'>by <strong>{blog.author}</strong>  on {blog.created_at}</div>
                    <div className="pe-md-5 pb-3">
                        {
                        blog.image && <img src={`${fileUrl}images/blogs/${blog.image?.url}`} className='w-100' />
                        }
                    </div>
                    <div dangerouslySetInnerHTML={ {__html: blog.content}}>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='card shadow border-0 sidebar'>
                        <div className="card-body px-4 py-5">
                            <h3 className='mt-2 mb-3'>Latest Blogs</h3>

                            <ul>
                                {
                                    blogs && blogs.map((blog) => {
                                        return (
                                            <div className="d-flex border-bottom mb-3 pb-2">
                                             <div className="pe-3 pb-2">
                                             <img src={`${fileUrl}images/blogs/${blog.image?.url}`} width={100} />
                                             </div>
                                             <Link  to={'/blog/' + blog.slug} className='title'>{blog.title}</Link>
                                           </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

    </main>
    </>
  )
}
const fetchAllblogs = async () =>{
    const res = await fetch(apiUrl + 'get-all-blogs');
    const result = await res.json();
    return (result.data);
}

export { BlogDetails as default, fetchAllblogs }