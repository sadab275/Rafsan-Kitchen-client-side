import React from 'react';
import img from '../../assets/chef.jpg'

const Chef = () => {
    return (
        <div>
            <h2 className='text-4xl text-center text-cyan-400 font-bold'>About Chef</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-1/2'>
                        <img alt='' src={img} />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Rafsan Haque</h1>
                        <p className="py-6">I am experienced working with numerous experts from different countries. I have made so many foreign recipes and also provide foods for 5 star restaurants. My cooking journey started when I was at the age of 10 and till now I develop skills in this field.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;