import React, { useContext } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useForm } from "react-hook-form"
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';
function Login() {
    const {login} =useContext(AuthContext)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const submitLogin= async (data)=>{
        // console.log(data);
        const res=await fetch("http://127.0.0.1:8000/api/authenticate",{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)
        });
        const result= await res.json(res);
        if(result.status == false){
            toast.error(result.message);
        }else{
           const userInfo={
                id:result.id,
                token:result.token
            }
            localStorage.setItem('userInfo',JSON.stringify(userInfo));
            login(userInfo);
            navigate('/admin/dashboard');
            toast('login succesfully');
        }
        // console.log(result);
      }
  return (
   <>
   <main>
     <div className="container my-5 d-flex justify-content-center">
        <div className="login-form my-5">
            <div className="card shadow-lg border-0">
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit(submitLogin)}>
                        <h3 className='mb-3'>Login Here</h3>
                    <div className="mb-3">
                        <label className='form-label'>Email</label>
                        <input
                        {
                            ...register('email',{required:"Email is required",
                                pattern:{
                                    value:/^[A-X0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message:"Invalid email address"
                                }
                            })
                        }
                         type='email' className={`form-control ${errors.email && 'is-invalid'}`} placeholder='Enter your email?'/>
                         {
                            errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>
                         }
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>Password</label>
                        <input 
                        {
                            ...register('password',{required:'Password is required'})
                        }
                          type='password'
                          className={`form-control ${errors.password && 'is-invalid'}`}
                          placeholder='Enter your password?'
                          />
                          {errors.password && <p className='ivalid-feedback'>{errors.password?.message}</p>}
                    </div>
                    <button type="submit" className='btn btn-primary'>Login</button>
                    </form>
                </div>
            </div>
        </div>
     </div>
   </main>
   </>
  )
}

export default Login