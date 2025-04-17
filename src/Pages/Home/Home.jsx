import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import InfoCards from './InfoCards/InfoCards';
import MakeVisa from './MakeVisa/MakeVisa';
import Explore from './Explore/Explore';
import WorldKey from './WorldKey/WorldKey';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Explore></Explore>
            <WorldKey></WorldKey>
            <Testimonial></Testimonial>
            <MakeVisa></MakeVisa>
            
        </div>
    );
};

export default Home;