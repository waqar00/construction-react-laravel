import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { apiUrl } from '../common/http';

const ServiceDetails = () => {
    const params = useParams();
    const fetchDetails = async () =>{
        const res = await fetch(apiUrl + 'service-details/' + params.slug);
        const result = await res.json();
        console.log(result)
    }
    useEffect(()=>{
        fetchDetails();
     },[])
  return (
    <div>ServiceDetails</div>
  )
}

export default ServiceDetails