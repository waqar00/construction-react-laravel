
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss'
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
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
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/services' element={<Services/>}/>
        <Route  path='/projects' element={<Projects/>}/>
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
      </Routes>
    </BrowserRouter>
    <ToastContainer
       position="top-right"
     />
    </>
  )
}

export default App
