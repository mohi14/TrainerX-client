import React from 'react';
import Banner from '../Banner/Banner';
import CustomerFeedBack from '../CustomerFeedBack/CustomerFeedBack';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    const ok = process.env.REACT_APP_ok
    console.log(ok)

    return (
        <div>
            <Banner></Banner>
            <ServicesHome></ServicesHome>
            <CustomerFeedBack></CustomerFeedBack>
        </div>
    );
};

export default Home;