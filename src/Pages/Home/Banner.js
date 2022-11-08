import React from 'react';
import img1 from '../../assets/banner1.jpg';
import img2 from '../../assets/banner2.jpg';
import img3 from '../../assets/banner3.jpg';
import img4 from '../../assets/banner4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full py-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carousel-img'>
                        <img alt='' src={img1} className="w-full rounded-xl" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute  justify-between  left-10  top-1/3'>
                        <h1 className='text-6xl font-bold text-cyan-400	'>Best Homemade food
                            <br />
                            in town</h1>
                        <p className='text-2xl mb-10 mt-20 font-bold text-teal-50'>I provide all kinds of homemade food within
                            <br /> a very reasonable price</p>
                        <button className='btn btn-info mt-15 mr-5'>Discover More</button>
                        <button className='btn btn-warning '>Food Menue</button>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='' src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='' src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt='' src={img4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;