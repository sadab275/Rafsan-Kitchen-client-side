import React from 'react';
import About from './About';
import Banner from './Banner';
import Chef from './Chef';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Chef></Chef>
        </div>
    );
};

export default Home;