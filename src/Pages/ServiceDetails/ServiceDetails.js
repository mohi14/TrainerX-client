import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../others/useTitle/useTitle';
import ReviewSection from './ReviewSection/ReviewSection';
import ServiceSection from './ServiceSection/ServiceSection';

const ServiceDetails = () => {
    useTitle('Service Details')
    const service = useLoaderData()
    console.log(service)

    return (
        <div>
            <ServiceSection
                key={service.title}
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