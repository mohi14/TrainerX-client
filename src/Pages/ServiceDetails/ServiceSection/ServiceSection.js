
import React from 'react';

const ServiceSection = ({ service }) => {
    const { _id, level, duration, total_reviews, title, details, image_url } = service;
    return (
        <div className='grid grid-cols-2 m-10 gap-10'>
            <div>
                <img src={image_url} alt="" />
            </div>
            <div>
                <p className='text-3xl font-semibold mb-3  border-b-2 border-[#FDBF1D] pb-2'>{title}</p>
                <p className='text-xl font-semibold'>Level</p>
                <p className='mb-3'>{level}</p>
                <p className='text-xl font-semibold'>Duration</p>
                <p className='mb-3'>{duration}</p>
                <p className='text-xl font-semibold'>Total Views</p>
                <p className='mb-3'>{total_reviews}</p>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServiceSection;