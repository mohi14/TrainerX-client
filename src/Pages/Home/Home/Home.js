import React from 'react';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    const ok = process.env.REACT_APP_ok
    console.log(ok)

    return (
        <div>
            <ServicesHome></ServicesHome>
        </div>
    );
};

export default Home;