import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsCard from '../MyReviewsCard/MyReviewsCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email])
    console.log(reviews)
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold border-b-2 border-[#FDBF1D] my-10 m-auto w-3/4 lg:w-1/4 pb-2'>Your Reviews</h1>
            <div className='grid grid-cols-1 gap-4 my-16'>
                {
                    reviews.map(review => <MyReviewsCard
                        key={review._id}
                        review={review}
                    ></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;