import { Button } from 'flowbite-react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { HiPencilAlt } from "react-icons/hi";

const MyReviewsCard = ({ review, handleUpdate, handleDelete }) => {
    const { serviceName, message, _id, date } = review;
    return (
        <div className='border-2 shadow-md w-3/4 lg:w-2/4 m-auto p-5 rounded-lg lg:flex gap-4'>
            <div>
                <h4 className='text-lg font-semibold mb-3'>{serviceName}</h4>
                <p className='mb-3 text-lg'>"{message}"</p>
                <small className='text-xs'>{date}</small>
            </div>
            <div className='flex gap-3 lg:block my-5 lg:my-0 lg:ml-auto '>
                <Button className='mb-2 px-2'
                    color={'success'}
                    onClick={() => handleUpdate(_id, review)}><HiPencilAlt className='mr-3 text-base' />Edit</Button>
                <Button
                    color={'failure'}
                    onClick={() => handleDelete(_id)}><FaTrash className='mr-2' /> Delete</Button>
            </div>
        </div>
    );
};

export default MyReviewsCard;