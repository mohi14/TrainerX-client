import { Carousel } from 'flowbite-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomerFeedBack = () => {
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold ml-10 lg:ml-16 my-7 text-center'>Customer Feedback</h2>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-3/4 m-auto">
                <Carousel>
                    <div className="flex flex-col h-full items-center justify-center bg-gray-100 ">
                        <img src='https://assets.website-files.com/5bee2dee67d34c2ea3a30653/5bfde238c038534e6ea3d874_Erin.png' alt="" className='h-[20px] lg:h-[80px] mb-2 lg:mb-4' />
                        <h3 className='text-xs lg:text-2xl font-bold lg:mb-3'>Erin Carbery</h3>
                        <p className='px-6 text-xs lg:text-lg text-center lg:mb-3'>I love the flexibility it gives me. I have a hectic work schedule, so it allows me to work out at any point of the day or night while not being confined to a studio class schedule. I enjoy the relationship I have formed with my trainer and feel that she really knows me and what my goals are.</p>
                        <p className='font-caveat lg:text-2xl text-green-600'>-Finally feeling like myself</p>
                        <p className='flex text-[#FDBF1D] text-xs'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                    </div>
                    <div className="flex flex-col h-full items-center justify-center bg-gray-100 ">
                        <img src='https://assets.website-files.com/5bee2dee67d34c2ea3a30653/5bfde238865bafe81e83e142_Peter%202.png' alt="" className='h-[20px] lg:h-[80px] mb-2 lg:mb-4' />
                        <h3 className='text-xs lg:text-2xl font-bold lg:mb-3'>Peter Meiusi</h3>
                        <p className='px-6 text-xs lg:text-lg text-center lg:mb-3'>I love the flexibility it gives me. I have a hectic work schedule, so it allows me to work out at any point of the day or night while not being confined to a studio class schedule. I enjoy the relationship I have formed with my trainer and feel that she really knows me and what my goals are.</p>
                        <p className='font-caveat lg:text-2xl text-green-600'>-Lost 120 Pounds & 2 Sizes</p>
                        <p className='flex text-[#FDBF1D] text-xs lg:text-lg'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                    </div>


                </Carousel>
            </div>
        </div>
    );
};

export default CustomerFeedBack;