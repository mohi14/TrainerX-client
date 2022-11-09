import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsCard from '../MyReviewsCard/MyReviewsCard';
import Swal from 'sweetalert2'

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    const [confirmation, setConfirmation] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email])

    const handleDelete = id => {
        console.log('clicked')

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/reviews/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = reviews.filter(rev => rev._id !== id);
                            setReviews(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    const handleUpdate = id => {

    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold border-b-2 border-[#FDBF1D] my-10 m-auto w-3/4 lg:w-1/4 pb-2'>Your Reviews</h1>
            <div className='grid grid-cols-1 gap-4 my-16'>
                {
                    reviews.map(review => <MyReviewsCard
                        key={review._id}
                        review={review}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                    ></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;