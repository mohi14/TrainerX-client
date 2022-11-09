import { Button, Card } from 'flowbite-react';
import React from 'react';

const ServicesCard = ({ services }) => {
    const { _id, title, image_url, details } = services
    return (
        <div className="h-full">
            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={image_url}
            >
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