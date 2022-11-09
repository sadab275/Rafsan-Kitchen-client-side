import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { _id, image, name, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || "unregistered";
        const username = form.name.value;
        const review = form.review.value;


        const reviewDetails = {
            service: _id,
            serviceName: name,
            price,
            customer: username,
            email,
            review
        }
        console.log(reviewDetails);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Placed Successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }


    return (
        <div>
            <div>
                <div className="card card-compact w-96  bg-base-100 shadow-xl ">
                    <figure><img className='w-full h-40' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-green-500 font-bold">{name}</h2>
                        <p className='text-success'>{description}</p>
                        <p className='text-2xl text-orange-500 font-semibold'>Price: {price} BDT</p>

                    </div>

                </div>
            </div>
            <div>
                <h2 className='text-5xl text-center font-bold text-green-700 mb-5'>Review Section for : {name}</h2>

                <form onSubmit={handlePlaceReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                        {/* <input type="text" placeholder="Your review" className="input input-ghost w-full input-bordered" /> */}
                        <input name='name' type="text" placeholder="Your name" className="input input-ghost w-full input-bordered" required />
                        <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                    </div>
                    <textarea name='review' className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                    <input className='btn btn-primary' type="submit" value="Place your Review" />
                </form>

            </div>

        </div>
    );
};

export default ServiceDetails;