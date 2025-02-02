import React, { useState } from 'react'
import Sidebar from '../../common/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { apiUrl, token } from '../../common/http';
import { toast } from 'react-toastify';

const Create = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [image , setImage] = useState();
    const handleImage =async (e)=>{
        const file = e.target.files[0];
        setImage(file);
    }
    const onSubmit = async (data) =>{
        const formData = new FormData();
        formData.append('testimonial',data.testimonial);
        formData.append('citation',data.citation);
        formData.append('status',data.status);
        if(image){
            formData.append('image',image);
        }
        try {
            const create =await fetch(apiUrl + 'testimonials',{
                method : 'POST',
                headers:{
                    'Authorization':`Bearer ${token()}`
                  },
                body : formData
            });
           const result = await create.json();
           if (result.status == true){
              toast.success(result.message);
              navigate('/admin/testimonials');
           }else{
            toast.error(result.message);
           }
        } catch (error) {
           toast.error(error); 
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
                            <h4 className='h5'>Testimonials</h4>
                            <Link to="/admin/testimonials" className='btn btn-primary'>Back</Link>
                        </div>
                        <hr />
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Feedback</label>
                                <input
                                    type="text"
                                    name="testimonial"
                                    className={`form-control ${errors.testimonial && 'is-invalid'}`}
                                    placeholder="Enter Testimonial?"

                                    {
                                    ...register('testimonial', { required: 'the field is required' })
                                    }
                                />
                                {
                                    errors.testimonial && <p className='invalid-feedback'>{errors.testimonial?.message}</p>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className='form-label'>Citation</label>
                                <input
                                    type="text"
                                    name="citation"
                                    className={`form-control ${errors.citation && 'is-invalid'}`}
                                    placeholder="Enter Citation?"

                                    {
                                    ...register('citation', { required: 'the field is required' })
                                    }
                                />
                                {
                                    errors.citation && <p className='invalid-feedback'>{errors.citation?.message}</p>
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