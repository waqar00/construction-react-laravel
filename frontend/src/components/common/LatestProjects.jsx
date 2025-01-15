import React, { useEffect, useState } from 'react'
import { apiUrl, fileUrl } from './http'
import { Link } from 'react-router-dom';

const LatestProjects = () => {
    const [projects, setProjects] = useState([]);
    const fetchProjects = async () => {
        const res = await fetch(apiUrl + 'get-latest-projects?limit=4');
        const result = await res.json();
        if (result.status == true) {
            setProjects(result.data);
        } else {

        }
    }
    useEffect(() => {
        fetchProjects();
    }, [])
    return (
        <section className='section-3 py-5'>
            <div className='container-fluid py-5'>
                <div className='section-header text-center'>
                    <span>Our Projects</span>
                    <h2 >Our Projects services</h2>
                    <p>Crafting dreams with precision and excellence</p>
                </div>
                <div className='row pt-4'>
                    {
                        projects && projects.map((project) => {
                            return (
                                <div className="col-md-3" key={`project-${project.id}`}>
                                    <div className="item">
                                        <div className="service-image">
                                            {
                                                project.image && <img className='w-100' src={fileUrl + 'images/projects/' + project.image.url} alt="" />
                                            }
                                        </div>
                                        <div className="service-body">
                                            <div className="service-title">
                                                <h3>{project.title}</h3>
                                            </div>
                                            <div className="service-content">
                                                <p>
                                                    {project.short_desc}
                                                </p>
                                            </div>
                                            <Link to={'/projects/' + project.slug} className='btn btn-primary'>Read More</Link>
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

export default LatestProjects