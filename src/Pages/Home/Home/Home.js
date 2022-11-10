import React from 'react';
import Banner from '../Banner/Banner';
import CustomerFeedBack from '../CustomerFeedBack/CustomerFeedBack';
import ServicesHome from '../ServicesHome/ServicesHome';
import Tips from '../Tips/Tips';

const Home = () => {
    const ok = process.env.REACT_APP_ok
    console.log(ok)

    return (
        <div>
            <Banner></Banner>
            <ServicesHome></ServicesHome>
            <CustomerFeedBack></CustomerFeedBack>
            <Tips></Tips>
        </div>
    );
};

export default Home;