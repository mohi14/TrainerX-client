import { Button, Card } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

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
                <Button
                    color={'success'}>View Details</Button>
            </Card>
        </div>
    );
};

export default ServicesCard;