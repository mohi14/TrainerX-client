import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="h-56 lg:h-[600px]">
                <Carousel >
                    <div className='relative'>
                        <img
                            src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                            alt="..."
                            className='w-full' />

                        <div className=' absolute  transform -translate-y-1/2 left-20 lg:left-20 top-2/4'>
                            <h3 className=' font-bold  text-white lg:text-3xl lg:mb-2'>Be healthy</h3>
                            <h1 className=' font-bold  text-white lg:text-6xl lg:mb-3'>CERTIFIED HEALTH COACH</h1>
                            <h4 className=' font-bold  text-white mb-2 lg:mb-5 text-3xl'>we have <span className='font-caveat text-4xl text-[#FDBF1D]'>25+ Years</span> experience</h4>
                            <div className='flex gap-4 mb-3 lg:mb-0'>
                                <Button color={'success'} className='h-[30px] lg:h-[40px]'>About Us</Button>
                                <Link to='/services'><Button color={'success'} className='h-[30px] lg:h-[40px]'>Services</Button></Link>
                            </div>
                        </div>

                    </div>
                    <div className='relative'>
                        <img
                            src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="..."
                            className='w-full' />
                        <div className=' absolute  transform -translate-y-1/2 left-20 lg:left-20 top-2/4'>
                            <h3 className=' font-bold  text-white lg:text-3xl lg:mb-2'>A natural way of</h3>
                            <h1 className=' font-bold  text-white lg:text-6xl lg:mb-3'>IMPROVING HEALTH</h1>
                            <h4 className=' font-bold  text-white mb-2 lg:mb-5 text-3xl'>With our dedication <span className='font-caveat text-4xl text-[#FDBF1D]'>Support</span></h4>
                            <div className='flex gap-4 mb-3 lg:mb-0'>
                                <Link to='/services'><Button color={'success'} className='h-[30px] lg:h-[40px]'>Services</Button></Link>
                                <Button color={'success'} className='h-[30px] lg:h-[40px]'>Our Events</Button>

                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img
                            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="..."
                            className='w-full' />
                        <div className=' absolute  transform -translate-y-1/2 left-20 lg:left-20 top-2/4'>
                            <h3 className=' font-bold  text-white lg:text-3xl lg:mb-2'>Be healthy</h3>
                            <h1 className=' font-bold  text-white lg:text-6xl lg:mb-3'>CERTIFIED HEALTH COACH</h1>
                            <h4 className=' font-bold  text-white mb-2 lg:mb-5 text-3xl'>we have <span className='font-caveat text-4xl text-[#FDBF1D]'>25+ Years</span> experience</h4>
                            <div className='flex gap-4 mb-3 lg:mb-0'>
                                <Button color={'success'} className='h-[30px] lg:h-[40px]'>About Us</Button>
                                <Link to='/services'><Button color={'success'} className='h-[30px] lg:h-[40px]'>Services</Button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img
                            src="https://images.unsplash.com/photo-1574680376345-b2995af0324f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            alt="..."
                            className='w-full' />
                        <div className=' absolute  transform -translate-y-1/2 left-20 lg:left-20 top-2/4'>
                            <h3 className=' font-bold  text-white lg:text-3xl lg:mb-2'>A natural way of</h3>
                            <h1 className=' font-bold  text-white lg:text-6xl lg:mb-3'>IMPROVING HEALTH</h1>
                            <h4 className=' font-bold  text-white mb-2 lg:mb-5 text-3xl'>With our dedication <span className='font-caveat text-4xl text-[#FDBF1D]'>Support</span></h4>
                            <div className='flex gap-4 mb-3 lg:mb-0'>
                                <Link to='/services'><Button color={'success'} className='h-[30px] lg:h-[40px]'>Services</Button></Link>
                                <Button color={'success'} className='h-[30px] lg:h-[40px]'>Our Events</Button>

                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img
                            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80"
                            alt="..."
                            className='w-full' />
                        <div className=' absolute  transform -translate-y-1/2 left-20 lg:left-20 top-2/4'>
                            <h3 className=' font-bold  text-white lg:text-3xl lg:mb-2'>Be healthy</h3>
                            <h1 className=' font-bold  text-white lg:text-6xl lg:mb-3'>CERTIFIED HEALTH COACH</h1>
                            <h4 className=' font-bold  text-white mb-2 lg:mb-5 text-3xl'>we have <span className='font-caveat text-4xl text-[#FDBF1D]'>25+ Years</span> experience</h4>
                            <div className='flex gap-4 mb-3 lg:mb-0'>
                                <Button color={'success'} className='h-[30px] lg:h-[40px]'>About Us</Button>
                                <Link to='/services'><Button color={'success'} className='h-[30px] lg:h-[40px]'>Services</Button></Link>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;