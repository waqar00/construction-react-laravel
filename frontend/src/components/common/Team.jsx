import React, { useEffect, useState } from 'react'
import { apiUrl, fileUrl } from './http';

const Team = () => {
    const [teams, setTeams] = useState([]);
    const fetchTeams = async () => {
        const response = await fetch(apiUrl + 'get-all-members', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            }
        });
        const result = await response.json();
        setTeams(result.data);
    } 
    useEffect(() => {
        fetchTeams();
     }, [])
  return (
    <section className='section-8 bg-light py-5'>
    <div className="container">
      <div className='section-header text-center'>
        <span> Team </span>
        <h1>Our Team</h1>
        <p>Crafting dreams with precision and excellence </p>
      </div>
      <div className="row pt-4" >
      {
        teams && teams.map((team)=>{
          return (
            <div className="col-md-6 col-lg-3 mb-3" key={`test-${team.id}`}>
              <div className="card shadow border-0">
                <div className="card-img-top">
                  {
                    team.image && <img className='w-100' src={fileUrl + 'images/members/' + team.image.url} alt="" />
                  }
                </div>
                <div className="card-body p-4">
                  <div className="card-title pb-0 mb-0">
                    {team.name}
                  </div>
                  <div className="card-sub-title mb-2"> {team.job_title}</div>
                  {
                    team && <a  target='_blank' href={team.linkedin_url} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  }
                  
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  </section>
  )
}

export default Team