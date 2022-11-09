import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServicesCard from '../Home/ServicesHome/ServicesCard';

const Services = () => {
    const { loading } = useContext(AuthContext)
    const services = useLoaderData();

    return (
        <>
            {
                loading ?
                    <div className="text-center my-60">
                        <Spinner
                            aria-label="Extra large spinner example"
                            size="xl"
                        />
                    </div>
                    :
                    <div className='grid lg:grid-cols-3 gap-6 px-10 lg:px-16 w-full my-10'>
                        {
                            services.map(services => <ServicesCard
                                key={services._id}
                                services={services}
                            ></ServicesCard>)
                        }
                    </div>
            }
        </>
    );
};

export default Services;