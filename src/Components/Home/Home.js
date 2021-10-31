import React from 'react';
import Adventure from '../Adventure/Adventure';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import WeOfferBest from '../WeOfferBest/WeOfferBest';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Packages/>
            <Adventure/>
            <WeOfferBest/>
         
        </div>
    );
};

export default Home;