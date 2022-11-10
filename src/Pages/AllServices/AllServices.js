import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://sadabs-kitchen-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useTitle('AllServices');
    return (
        <div className='my-10'>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-300'>All Services</p>
                <h2 className="text-5xl font-semibold my-10">My Food Menu</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* <h2>Services: {services.length}</h2> */}
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>


        </div>
    );
};

export default AllServices;