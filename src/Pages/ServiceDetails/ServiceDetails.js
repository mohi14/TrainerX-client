import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceSection from './ServiceSection/ServiceSection';

const ServiceDetails = () => {
    const service = useLoaderData()
    console.log(service)

    return (
        <div>
            <ServiceSection
                key={service._id}
                service={service}></ServiceSection>

        </div>
    );
};

export default ServiceDetails;