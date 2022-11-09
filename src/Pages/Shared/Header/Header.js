import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const activeClassName = 'border-b border-[#FDBF1D] lg:p-3 mb-2 lg:mb-0 hover:rounded-md hover:bg-green-900 hover:border-0'
    const { user, logOutUser } = useContext(AuthContext)

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar className='header text-white font-bold bg-transparent'>
                <Navbar.Brand className='pl-5 lg:pl-20 lg:py-4'>
                    <Link to="/"> <div className='text-3xl'>
                        Trainer<span className='font-caveat text-[45px] text-[#FDBF1D]'>X</span>
                    </div></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse
                    className='lg:pr-16'>
                    <NavLink to='/home' className={({ isActive }) =>
                        isActive ? activeClassName : 'lg:p-3 mb-2 lg:mb-0 hover:rounded-md hover:bg-green-900 hover:border-0'
                    }><p>HOME</p></NavLink>

                    <NavLink to='/services' className={({ isActive }) =>
                        isActive ? activeClassName : 'lg:p-3 mb-2 lg:mb-0 hover:rounded-md hover:bg-green-900 hover:border-0'
                    }><p>SERVICES</p></NavLink>

                    <NavLink to='/blog' className={({ isActive }) =>
                        isActive ? activeClassName : 'lg:p-3 mb-2 lg:mb-0 hover:rounded-md hover:bg-green-900 hover:border-0'
                    }><p>BLOG</p></NavLink>
                    {
                        user?.uid ?
                            <>
                                <NavLink to='/reviews' className={({ isActive }) =>
                                    isActive ? activeClassName : 'lg:p-3 mb-2 lg:mb-0 hover:rounded-md hover:bg-green-900 hover:border-0'
                                }><p>MY REVIEWS</p></NavLink>

                                <NavLink to='/addServices' className={({ isActive }) =>
                                    isActive ? activeClassName : 'lg:p-3 mb-2 lg:mb-0 hover:rounded-md hover:bg-green-900 hover:border-0'
                                }><p>ADD SERVICES</p></NavLink>

                                <Button color={'warning'} onClick={handleLogOut}>LOGOUT</Button>
                            </>
                            :
                            <>
                                <Link to='/login'><Button color={'warning'} onClick={handleLogOut}>LOGIN</Button></Link>
                            </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;