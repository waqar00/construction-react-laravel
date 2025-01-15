import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'
import { apiUrl, token } from '../../common/http';

const Show = () => {
    const [members, setMembers] = useState([]);
    const fetchmembers = async () => {
        const response = await fetch(apiUrl+'members',{
            method: 'GET',
            'headers' : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });
        const result = await response.json();
        setMembers(result.data);
    }
    const deletemember = async (id) => {
        if(confirm('Are you sure you want to delete this member')){
            const res =fetch(apiUrl + 'memebers/' +id,{
                method :'DELETE',
                headers : {
                    'Authorization' : `Bearer ${token()}`,
                    'Content-type' : 'application/json',
                }
            })
            const result =await res.json();
            if(result.status == true){
                const newMembers = members.filter(member => member.id != id);
                setMembers(newMembers);
                toast.success(result.message);
            }else{
                toast.error(result.message);
            }
        }

    }
    useEffect(() => {
        fetchmembers();
    },[])
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
                            <h4 className='h5'>Members</h4>
                            <Link to="/admin/members/create" className='btn btn-primary'>Create</Link>
                        </div>
                        <hr />
                        <table className="table table-responsive table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Job Title</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    members && members.map(member =>{
                                        return(
                                        <tr key={`member-${member.id}`}>
                                            <td>{ member.id}</td>
                                            <td>{ member.name}</td>
                                            <td>{ member.job_title}</td>
                                            <td>
                                                { 
                                                  (member.status == 1) ? 'Active' : 'Block'
                                                 }
                                             </td>
                                             <td>
                                                <Link to={`/admin/members/edit/${member.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                <Link href="#" onClick={() => deletemember(member.id)}  className='btn btn-secondry btn-sm ms-2'>Delete</Link>
                                             </td>
                                            
                                        </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default Show