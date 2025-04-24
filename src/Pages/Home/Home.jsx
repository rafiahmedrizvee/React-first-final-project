import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Explore from './Explore/Explore';
import WorldKey from './WorldKey/WorldKey';
import Testimonial from './Testimonial/Testimonial';
import InfoCards from './InfoCards/InfoCards';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Explore></Explore>
            <WorldKey></WorldKey>
            <Testimonial></Testimonial>
            
            
        </div>
    );
};

export default Home;