import React from 'react';
import img from '../../assets/aboutimg.jpg'

const About = () => {
    return (
        <div>
            <h2 className='text-4xl text-center text-cyan-400 font-bold'>About Us</h2>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img alt='' className='rounded-xl' src={img} />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">We Provide Best Quality and Hygenic Food</h1>
                        <p className="py-6">The cooking environment is quite clean and maintained. You can order any sorts of food from our services. Also I take orders for big occassions.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;