import React, { useMemo, useRef, useState } from 'react'
import Footer from '../../common/Footer'
import JoditEditor from 'jodit-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import { useForm } from 'react-hook-form'
import { apiUrl, fileUrl, token } from '../../common/http'
import { toast } from 'react-toastify'

const Edit = ({placeholder}) => {
  const params = useParams();
  const editor = useRef(null);
  const [image ,setImage] = useState([]);
  const [project ,setProject] = useState([]);
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
      const res = await fetch(apiUrl + 'projects/' + params.id, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token()}`
        },
     });
     const result = await res.json();
     setContent(result.data.content)
     setProject(result.data)
     return {
      title:result.data.title,
      short_desc:result.data.short_desc,
      status:result.data.status,
      location:result.data.location,
      sector:result.data.sector,
      construction_type:result.data.construction_type,
  }
    }
  });
  const handleImage =(e) =>{
    const file=e.target.files[0];
    setImage(file);
  }
  const onSubmit = async (data) =>{
    const formData= new FormData();
    formData.append('title',data.title);
    formData.append('location',data.location);
    formData.append('sector',data.sector);
    formData.append('construction_type',data.construction_type);
    formData.append("content", content);
    formData.append("short_desc", data.short_desc);
    formData.append("status", data.status);
    formData.append("_method", 'put');
    if(image){
      formData.append("image",image);
    }
    try {
       const res =await fetch(apiUrl + 'projects/' + params.id ,{
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token()}`
        },
        body: formData
       })
       const result =await res.json();
       if(result.status = true){
         toast.success(result.message);
         navigate('/admin/projects');
       }else{
        toast.error(result.message)
       }
    } catch (error) {
        console.log(error)
        toast.error('Faild!')
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
                    <div className='col-md-9 mt-1'>
                        <div className="card shadow-lg border-0">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between">
                                    <h4 className='h5'>Project / Edit</h4>
                                    <Link to="/admin/projects" className='btn btn-primary'>Back</Link>
                                </div>
                                <hr />
                                <form action="" onSubmit={handleSubmit(onSubmit)} className='form-control'>
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
                                        <input
                                            type="text"
                                            name="sector"
                                            className={`form-control ${errors.sector && 'is-invalid'}`}
                                            placeholder="Enter Sector?"
                                            {
                                            ...register('sector', { required: 'the field is required' })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Construction type</label>
                                        <input
                                            type="text"
                                            name="construction_type"
                                            className={`form-control ${errors.construction_type && 'is-invalid'}`}
                                            placeholder="Construction type?"
                                            {
                                            ...register('construction_type', { required: 'the field is required' })
                                            }
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
                                                project.image && <img className='w-50 rounded-4' src={fileUrl + 'images/projects/' + project.image.url} alt="" />
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