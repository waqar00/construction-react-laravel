import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../common/Sidebar'
const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <>
     <main>
        <div className="container my-5">
        <div className="row">
            <div className='col-md-3'>
                {/* sideBar */}
                <Sidebar/>
            </div>
            <div className='col-md-9 dashboard'>
                <div className="card shadow-lg border-0">
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h4>Welcome to Dashboard</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
     </main>
    </>
  )
}

export default Dashboard