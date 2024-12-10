import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'
import { useForm } from 'react-hook-form'
import { apiUrl, token } from '../../common/http';
import { toast } from 'react-toastify';

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
      formData.append('author',data.author);
      formData.append("content", content);
      formData.append("status", data.status);
      if(image){
        formData.append("image",image);
      }
      try {
        const create =await fetch(apiUrl+'blogs',{
          method:'POST',
          headers:{
            'Authorization':`Bearer ${token()}`
          },
          body:formData
        });
        const result = await create.json();
        if(result.status = true){
          toast.success(result.message)
          navigate('/admin/blogs');
        }else{
          toast.error(result.message);
        }
      } catch (error) {
        toast.error(error);
      }
    }
    return (
        <>
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
                                        <Link to="/admin/blogs" className='btn btn-primary'>Back</Link>
                                    </div>
                                    <hr />
                                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="" className='form-label'>Title</label>
                                            <input
                                                type="text"
                                                name="title"
                                                className={`form-control ${errors.title && 'is-invalid'}`}
                                                placeholder="Enter Title?"

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
                                            <label htmlFor="" className='form-label'>Image</label>
                                            <br />
                                            <input type="file" name='file' onChange={handleImage}
                                            />
                                            <br />
                                            {/* <img src={file} className='w-50 mt-2 rounded-3' /> */}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className='form-label'>Author</label>
                                            <input
                                                type="text"
                                                name="author"
                                                className={`form-control ${errors.author && 'is-invalid'}`}
                                                placeholder="Enter Author?"

                                                {
                                                ...register('author', { required: 'the field is required' })
                                                }
                                            />
                                            {
                                                errors.author && <p className='invalid-feedback'>{errors.author?.message}</p>
                                            }
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
        </>
    )
}

export default Create