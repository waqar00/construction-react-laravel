import React ,{useRef,useState ,useMemo} from 'react'
import { useForm } from "react-hook-form";
import { apiUrl, token ,fileUrl} from '../../common/http'
import { toast } from 'react-toastify'
import Footer from '../../common/Footer'
import JoditEditor from 'jodit-react'
import { Link , useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'

const Edit = ({ placeholder }) => {
    const params =useParams();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [service, setService] = useState('');
    const [image, setImage] = useState('');
    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || ''
    }),
        [placeholder]
    );
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        //Show Service Data
        defaultValues: async () => {
            const res = await fetch(apiUrl + 'services/' + params.id, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token()}`
                },
            });

            const result = await res.json();
            setContent(result.data.content)
            setService(result.data)
            
            return {
                title:result.data.title,
                short_desc:result.data.short_desc,
                status:result.data.status,
            }
        }
    });

    //Set Image
    const handleImage=(e) =>{
        const file =e.target.files[0];
        setImage(file)
    }
    //Update Service
    const onSubmit=async (data) =>{
        const formData= new FormData();
        formData.append("title",data.title);
        formData.append("content",content);
        formData.append("short_desc",data.short_desc);
        formData.append("status",data.status);
        formData.append("_method",'put');
        if(image){
            formData.append("image",image);
        }
        
        try {
           const res =await fetch(apiUrl + 'services/' + params.id ,{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token()}`
            },
            body: formData
           })
           const result =await res.json();
           if(result.status = true){
             toast.success(result.message);
             navigate('/admin/showServices');
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
                        <div className='col-md-9'>
                            <div className="card shadow-lg border-0">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <h4 className='h5'>Services / Edit</h4>
                                        <Link to="/admin/showServices" className='btn btn-primary'>Back</Link>
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
                                            <label htmlFor="" className='form-label'>Image</label>
                                            <br />
                                            <input type="file" name='file' onChange={handleImage}
                                            />
                                            <br />
                                            {/* <img src={file} className='w-50 mt-2 rounded-3' /> */}
                                        </div>
                                        <div className='pb-2'>
                                           {
                                                service.image && <img className='w-50 rounded-4' src={fileUrl + 'images/services/' + service.image.url} alt="" />
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