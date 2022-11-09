import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSection from './ReviewSection/ReviewSection';
import ServiceSection from './ServiceSection/ServiceSection';

const ServiceDetails = () => {
    const service = useLoaderData()
    console.log(service)

    return (
        <div>
            <ServiceSection
                key={service._id}
                service={service}
            ></ServiceSection>
            <ReviewSection
                key={service._id}
                service={service}
            ></ReviewSection>

        </div>
    );
};

export default ServiceDetails;