import { Button, Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../others/useTitle/useTitle';
import ServicesCard from './ServicesCard';

const ServicesHome = () => {
    useTitle('Home')
    const { loading, setLoading } = useContext(AuthContext)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/servicesHome')
            .then(res =>
                res.json()
            )
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold ml-10 lg:ml-16 my-5'>Services</h2>
            {
                loading ?
                    <div className="text-center my-60">
                        <Spinner
                            aria-label="Extra large spinner example"
                            size="xl"
                        />
                    </div>
                    :
                    <div className='grid lg:grid-cols-3 gap-6 px-10 lg:px-16 w-full'>
                        {
                            services.map(services => <ServicesCard
                                key={services._id}
                                services={services}
                            ></ServicesCard>)
                        }
                    </div>
            }
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