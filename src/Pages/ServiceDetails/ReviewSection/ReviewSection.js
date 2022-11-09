import { data } from 'autoprefixer';
import { Button, Label, Textarea } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewsCard from './ReviewsCard';

const ReviewSection = ({ service }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, } = service;

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    const handleSubmit = (event) => {
        event.preventDefault();

        const message = event.target.message.value;
        const email = user?.email || 'unregistered';
        const userName = user?.displayName || 'unregistered';
        const userPhoto = user?.photoURL;

        const review = {
            service: _id,
            serviceName: title,
            userName,
            userPhoto,
            email,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added successfully')
                    event.target.reset();
                }
            })
            .catch(error => console.error(error))
        console.log(review)

    }
    return (
        <div className='my-20'>
            <h1 className='w-1/2 text-center m-auto text-3xl font-semibold border-b-2 border-[#FDBF1D] pb-2'>Customer Reviews</h1>
            <div className='grid grid-cols-1 gap-3 w-3/4 lg:w-1/2 m-auto my-16'>
                {
                    reviews.map(review => <ReviewsCard
                        key={review._id}
                        review={review}
                    ></ReviewsCard>)
                }
            </div>
            <div>
                <div className='my-10'>
                    <div>

                    </div>
                    {
                        user?.uid ? ''
                            : <>
                                <h1 className='text-3xl font-semibold text-center'>You are not logged in. Please login to add a review</h1>
                                <Link to='/login'> <Button
                                    color={'success'}
                                    className='m-auto my-5'
                                >Login</Button>
                                </Link>
                            </>
                    }
                </div>
                <form id="textarea" onSubmit={handleSubmit} className='mx-10 lg:mx-20 my-10'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Your message"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        name='message'
                        required={true}
                        rows={4}
                    />
                    <Button className='ml-auto mt-3'
                        color={'success'}
                        type={'submit'}
                        disabled={user?.uid ? false : true}>Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default ReviewSection;