import React, { useState, useRef, useMemo } from 'react';
import Footer from '../../common/Footer'
import JoditEditor from 'jodit-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import { useForm } from 'react-hook-form'
import { apiUrl, token ,fileUrl} from '../../common/http';
import { toast } from 'react-toastify';


const Edit = ({placeholder}) => {
    const [blogs,setBlogs] = useState([]);
    const params = useParams();
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
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:async () =>{
            const res = await fetch(apiUrl + 'blogs/' + params.id, {
              method: 'GET',
              headers: {
                  'Authorization': `Bearer ${token()}`
              },
           });
           const result = await res.json();
           setContent(result.data.content)
           setBlogs(result.data)
           return {
            title:result.data.title,
            content:result.data.content,
            status:result.data.status,
            author:result.data.author,
        }
          }
    });
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
      formData.append("_method", 'put');
      if(image){
        formData.append("image",image);
      }
      try {
        const update =await fetch(apiUrl + 'blogs/' + params.id,{
          method:'POST',
          headers:{
            'Authorization':`Bearer ${token()}`
          },
          body:formData
        });
        const result = await update.json();
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
                                        <div className='pb-2'>
                                           {
                                                blogs.image && <img className='w-50 rounded-4' src={fileUrl + 'images/blogs/' + blogs.image.url} alt="" />
                                            }
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
                                            <button type="submit" className='btn btn-primary'>Update</button>
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

export default Edit