import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../Home/ServicesHome/ServicesCard';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='grid lg:grid-cols-3 gap-6 px-10 lg:px-16 w-full my-10'>
            {
                services.map(services => <ServicesCard
                    key={services._id}
                    services={services}
                ></ServicesCard>)
            }
        </div>
    );
};

export default Services;