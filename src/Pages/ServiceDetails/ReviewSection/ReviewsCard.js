import React from 'react';

const ReviewsCard = ({ review }) => {
    console.log(review)
    const { message, userPhoto, userName, date } = review

    return (
        <div className='border flex gap-4 rounded-lg shadow-lg'>
            <div className='p-5'>
                <img src={userPhoto} alt="" className='rounded-full ' />
            </div>
            <div className='py-10'>
                <h3 className='text-xl font-semibold'>{userName}</h3>
                <p>{message}</p>
                <small>{date}</small>
            </div>
        </div>
    );
};

export default ReviewsCard;