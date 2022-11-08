import { Button, Navbar } from 'flowbite-react';
import React from 'react';

const Header = () => {
    return (
        <div>
            <Navbar className='bg-[#031A06] text-white font-bold bg-transparent'>
                <Navbar.Brand className='pl-5 lg:pl-32 lg:py-4'>
                    <div className='text-3xl'>
                        Trainer<span className='font-caveat text-[45px] text-[#FDBF1D]'>X</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse
                    className='text-center lg:pr-32'>
                    <p>HOME</p>
                    <p>SERVICES</p>
                    <p>MY REVIEWS</p>
                    <p>ADD SERVICES</p>
                    <p>BLOG</p>
                    <p>LOGIN</p>
                    <p>LOGOUT</p>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;