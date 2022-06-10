import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import Portfolio from '../Portfolio/Portfolio';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;