import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, image, name, price, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-40' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-green-500 font-bold">{name}</h2>
                <p className='text-success'>{description.slice(0, 100)}</p>
                <p className='text-2xl text-orange-500 font-semibold'>Price: {price} BDT</p>
                <div className="card-actions justify-end">
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;