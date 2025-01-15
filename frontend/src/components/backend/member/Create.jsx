import React, { useState } from 'react'
import Sidebar from '../../common/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { apiUrl, token } from '../../common/http';

const Create = () => {
        const navigate = useNavigate();
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const [image, setImage] = useState();
       const handleImage =(e) =>{
        const file = e.target.files[0];
        setImage(file);
       }
        const onSubmit = async (data) => {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('job_title', data.job_title);
            formData.append('linkedin_url', data.linkedin_url);
            formData.append('status', data.status);
            if (image) {
                formData.append("image", image);
            }
            try {
                const res = await fetch(apiUrl + 'members', {
                    method: 'POST',
                    headers :{
                        'Authorization' : `Bearer ${token()}`
                    },
                    body: formData
                });
                const result = await res.json();
                if (result.status === true) {
                    navigate('/admin/members');
                    toast.success(result.message);
                } else {
                    alert(result.message);
                }
            } catch (error) {
                console.error("Error uploading image:", error);
                alert("Image upload failed.");
            }
        }
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
                            <h4 className='h5'>Services</h4>
                            <Link to="/admin/members" className='btn btn-primary'>Back</Link>
                        </div>
                        <hr />
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className={`form-control ${errors.name && 'is-invalid'}`}
                                    placeholder="Enter Name?"

                                    {
                                    ...register('name', { required: 'the field is required' })
                                    }
                                />
                                {
                                    errors.name && <p className='invalid-feedback'>{errors.title?.message}</p>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Job Title</label>
                                <input
                                    type="text"
                                    name="job_title"
                                    className={`form-control ${errors.job_title && 'is-invalid'}`}
                                    placeholder="Enter job_title?"

                                    {
                                    ...register('job_title', { required: 'the field is required' })
                                    }
                                />
                                {
                                    errors.job_title && <p className='invalid-feedback'>{errors.job_title?.message}</p>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>LinkedIn Url</label>
                                <input
                                    type="text"
                                    name="linkedin_url"
                                    className={`form-control ${errors.linkedin_url && 'is-invalid'}`}
                                    placeholder="Enter linkedin_url?"

                                    {
                                    ...register('linkedin_url', { required: 'the field is required' })
                                    }
                                />
                                {
                                    errors.linkedin_url && <p className='invalid-feedback'>{errors.linkedin_url?.message}</p>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Image</label>
                                <br />
                                <input type="file" name='file' onChange={handleImage}
                                />
                                <br />
                                {/* <img src={file} className='w-50 mt-2 rounded-3' /> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label '>status</label>
                                <select                                   {
                                    ...register('status')
                                }
                                    className='form-control'>
                                    <option value="1">Active</option>
                                    <option value="0">Block</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className='btn btn-primary'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
  )
}

export default Create