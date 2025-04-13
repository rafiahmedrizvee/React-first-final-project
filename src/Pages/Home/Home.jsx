import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import InfoCards from './InfoCards/InfoCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;