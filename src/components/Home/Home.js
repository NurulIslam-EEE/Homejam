import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Reviews/Reviews';
import UpcomingShows from '../UpcomingShows/UpcomingShows';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <UpcomingShows />
            <Reviews />
        </>
    );
};

export default Home;