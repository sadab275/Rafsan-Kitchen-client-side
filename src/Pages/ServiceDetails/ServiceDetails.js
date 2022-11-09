import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { image, name, price, description } = useLoaderData();
    return (
        <div className="card card-compact w-96  bg-base-100 shadow-xl ">
            <figure><img className='w-full h-40' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-green-500 font-bold">{name}</h2>
                <p className='text-success'>{description}</p>
                <p className='text-2xl text-orange-500 font-semibold'>Price: {price} BDT</p>

            </div>
        </div>
    );
};

export default ServiceDetails;