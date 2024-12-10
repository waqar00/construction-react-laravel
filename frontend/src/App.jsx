
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss'
import Services, { fetchAllServices } from './components/frontend/Services';
import Projects, { fetchAllProjects } from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import ContactUs from './components/frontend/ContactUs';
import Login from './components/backend/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/backend/Dashboard';
import RequiredAuth from './components/common/RequiredAuth';
import ShowServices from './components/backend/services/ShowServices';
import {default as CreateService} from './components/backend/services/Create';
import {default as EditService} from './components/backend/services/Edit';
import {default as ShowProject} from './components/backend/project/Show';
import {default as CreateProject} from './components/backend/project/Create';
import {default as EditProject} from './components/backend/project/Edit';
import {default as ShowBlog} from './components/backend/blog/Show';
import {default as CreateBlog} from './components/backend/blog/Create';
import {default as EditBlog} from './components/backend/blog/Edit';
import {default as CreateTestimonial} from './components/backend/testimonials/Create';
import {default as ShowTestimonial} from './components/backend/testimonials/Show';
import {default as EditTestimonial} from './components/backend/testimonials/Edit';
import ServiceDetails from './components/frontend/ServiceDetails';
import Layout from './components/layout/Layout';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route  path='' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route 
            loader={fetchAllServices} 
            path='/services' 
            element={<Services/>}
         />
        <Route  
            path='/services/:slug' 
            element={<ServiceDetails/>}
        />
        <Route  
          loader={fetchAllProjects}
          path='/projects' 
          element={<Projects/>}
        />
        <Route  path='/blogs' element={<Blogs/>}/>
        <Route  path='/contact-us' element={<ContactUs/>}/>
        <Route  path='/admin/login' element={<Login/>}/>
        <Route  path='/admin/dashboard' element={
          <RequiredAuth>
            <Dashboard/>
          </RequiredAuth>
          }/>
          <Route  path='/admin/showServices' element={
          <RequiredAuth>
            <ShowServices/>
          </RequiredAuth>
          }/>
          <Route  path='/admin/showServices/create' element={
          <RequiredAuth>
            <CreateService/>
          </RequiredAuth>
          }/>
          <Route  path='/admin/showServices/edit/:id' element={
          <RequiredAuth>
            <EditService/>
          </RequiredAuth>
          }/>
          <Route  path='/admin/projects' element={
          <RequiredAuth>
            <ShowProject/>
          </RequiredAuth>
          }/>
          <Route  path='/admin/projects/create' element={
          <RequiredAuth>
            <CreateProject/>
          </RequiredAuth>
          }/>
          <Route  path='/admin/projects/edit/:id' element={
          <RequiredAuth>
            <EditProject/>
          </RequiredAuth>
          }/>
          <Route  path='/admin/blogs' element={
            <RequiredAuth>
              <ShowBlog/>
            </RequiredAuth>
          }/>
          <Route  path='/admin/blog/create' element={
            <RequiredAuth>
              <CreateBlog/>
            </RequiredAuth>
          }/>
          <Route  path='/admin/blogs/edit/:id' element={
          <RequiredAuth>
            <EditBlog/>
          </RequiredAuth>
          }/>
          <Route path='/admin/testimonial/create'
             element = {
              <RequiredAuth>
                <CreateTestimonial/>
              </RequiredAuth>
             }
          />
          <Route path='/admin/testimonial/edit/:id'
            element = {
              <RequiredAuth>
                <EditTestimonial/>
              </RequiredAuth>
            }
          />
          <Route path='/admin/testimonials'
            element = {
              <RequiredAuth>
                <ShowTestimonial/>
              </RequiredAuth>
            }
          />
      </Route>
    )
  )
  return (
    <>
    <ToastContainer
       position="top-right"
     />
     <RouterProvider router={router}/>
    </>
  )
}

export default App
