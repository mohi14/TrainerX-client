import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsCard from '../MyReviewsCard/MyReviewsCard';
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';
import useTitle from '../../others/useTitle/useTitle';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user, logOutUser } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOutUser()
                }
                return res.json()

            })
            .then(data => {
                setReviews(data)
            });
    }, [user?.email, logOutUser])

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

    const handleUpdate = async (id, review) => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Your Review',
            inputPlaceholder: `${review.message}`,
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })

        if (text) {
            // Swal.fire(text)
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ message: text })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        const remaining = reviews.filter(rev => rev._id !== id)
                        const editing = reviews.find(rev => rev._id === id)
                        editing.message = text
                        const newReviews = [editing, ...remaining]
                        setReviews(newReviews)
                        toast.success('updated')
                    }
                })
        }
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold border-b-2 border-[#FDBF1D] my-10 m-auto w-3/4 lg:w-1/4 pb-2'>Your Reviews</h1>
            <div className='grid grid-cols-1 gap-4 my-16'>
                {
                    reviews ?
                        <>
                            {
                                reviews.map(review => <MyReviewsCard
                                    key={review._id}
                                    review={review}
                                    handleUpdate={handleUpdate}
                                    handleDelete={handleDelete}
                                ></MyReviewsCard>)
                            }
                        </>
                        :
                        <h1 className='text-3xl font-semibold text-center'>No reviews were added</h1>
                }
            </div>
        </div>
    );
};

export default MyReviews;