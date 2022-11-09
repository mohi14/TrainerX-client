import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const ServicesHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/servicesHome')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold ml-10 lg:ml-16 my-5'>Services</h2>
            <div className='grid lg:grid-cols-3 gap-6 px-10 lg:px-16 w-full'>
                {
                    services.map(services => <ServicesCard
                        key={services._id}
                        services={services}
                    ></ServicesCard>)
                }
            </div>
            <Link to="/services">
                <Button className='m-auto mt-5'
                    color={'success'}
                >
                    View More
                </Button>
            </Link>
        </div>
    );
};

export default ServicesHome;