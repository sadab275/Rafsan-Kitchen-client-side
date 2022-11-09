import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewCard = ({ revie }) => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const { customer, review, price } = revie;
    return (
        <div>
            <div className="card card-compact w-96  bg-base-100 shadow-xl ">
                <figure><img className='w-full h-40' src={user?.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-500 font-bold">{customer}</h2>
                    <p className='text-success'>{review}</p>
                    <p className='text-2xl text-orange-500 font-semibold'>Price: {price} BDT</p>

                </div>

            </div>
        </div>
    );
};

export default ReviewCard;