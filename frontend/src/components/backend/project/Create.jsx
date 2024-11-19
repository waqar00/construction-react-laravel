import Footer from '../../common/Footer'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import JoditEditor from 'jodit-react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { apiUrl, token } from '../../common/http'
import { toast } from 'react-toastify'
import React, { useState, useRef, useMemo } from 'react';

const Create = ({placeholder}) => {
  const editor = useRef(null);
  const [image ,setImage] = useState([]);
  const [content, setContent] = useState('');
  const config = useMemo(() => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || 'Content'
  }),
      [placeholder]
  );
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const handleImage =(e) =>{
    const file=e.target.files[0];
    setImage(file);
  }
  const onSubmit= async (data) =>{
    const formData = new FormData(); 
    formData.append('title',data.title);
    formData.append('location',data.location);
    formData.append('sector',data.sector);
    formData.append('construction_type',data.construction_type);
    formData.append("content", content);
    formData.append("short_desc", data.short_desc);
    formData.append("status", data.status);
    if(image){
      formData.append("image",image);
    }
    try {
      const create =await fetch(apiUrl+'projects',{
        method:'POST',
        headers:{
          'Authorization':`Bearer ${token()}`
        },
        body:formData
      });
      const result = await create.json();
      if(result.status = true){
        toast.success(result.message)
        navigate('/admin/projects');
      }else{
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }
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
                                    <Link to="/admin/projects" className='btn btn-primary'>Back</Link>
                                </div>
                                <hr />
                                <form action="" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Name</label>
                                        <input
                                            type="text"
                                            name="title"
                                            className={`form-control ${errors.title && 'is-invalid'}`}
                                            placeholder="Enter Name?"

                                            {
                                            ...register('title', { required: 'the field is required' })
                                            }
                                        />
                                        {
                                            errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Content</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1} // tabIndex of textarea
                                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                            onChange={newContent => { }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Description</label>
                                        <textarea                                       {
                                            ...register('short_desc')
                                        }
                                            name="short_desc" className='form-control' rows={4}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            className={`form-control ${errors.location && 'is-invalid'}`}
                                            placeholder="Enter Location?"
                                            {
                                            ...register('location', { required: 'the field is required' })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Sector</label>
                                        <select className="form-control" name="sector" id="sector"
                                        {
                                            ...register('sector')
                                        }
                                        >
                                            <option value="">Sector</option>
                                            <option value="Health">Health</option>
                                            <option value="Education">Education</option>
                                            <option value="Conrporate">Conrporate</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Construction type</label>
                                        <select className="form-control" name="construction_type" id="construction_type"
                                        {
                                            ...register('construction_type')
                                        }
                                        >
                                            <option value="">Construction Type</option>
                                            <option value="Residential Construction">Residential Construction</option>
                                            <option value="Industrial Construction">Industrial Construction</option>
                                            <option value="Conmmercial Construction">Conmmercial Construction</option>
                                            <option value="Infrastucture Construction">Infrastucture Construction</option>
                                        </select>
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
        <Footer />
    </>
)
}

export default Create