import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-300'>Services</p>
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
            <div className='text-center'>
                <button className='btn btn-outline btn-secondary px-10 mt-5'>See All</button>
            </div>


        </div>
    );
};

export default Services;