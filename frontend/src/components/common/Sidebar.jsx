import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../backend/context/Auth'

const Sidebar = () => {
    const {logout} =useContext(AuthContext)
    return (
        <>
            <div className="card shadow-lg border-0">
                <div className="card-body p-4 sidebar">
                    <h4>Sidebar</h4>
                    <ul>
                        <li>
                            <NavLink to="/admin/dashboard">Dashboaard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/articles">Articles</NavLink>
                        </li>
                        <li>
                            <button onClick={logout} className='btn btn-primary mt-4'>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar