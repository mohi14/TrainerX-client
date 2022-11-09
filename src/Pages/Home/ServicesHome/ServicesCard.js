import { Button, Card } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServicesCard = ({ services }) => {
    const { _id, title, image_url, details } = services
    return (
        <div className="h-full">
            <Card >
                <PhotoProvider>
                    <PhotoView key={_id} src={image_url}>
                        <img src={image_url} alt="" className='rounded-md hover:cursor-pointer' />
                    </PhotoView>
                </PhotoProvider>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {details.slice(0, 100) + '...'}
                </p>
                <Link to={`/services/${_id}`}>
                    <Button
                        color={'success'}
                        className='w-full'>View Details</Button>
                </Link>
            </Card>
        </div>
    );
};

export default ServicesCard;