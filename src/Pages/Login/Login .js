import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='max-w-xs lg:max-w-xl m-auto mt-20 p-10 lg:py-16 lg:px-20 bg-slate-50 shadow-lg rounded-lg'>
            <p className='text-center text-3xl font-bold mb-4'>Please Login!</p>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your Email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        placeholder="Enter your email"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your Password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        placeholder="Enter your password"
                        required={true}
                        shadow={true}
                    />
                </div>
                <Button type="submit" color={"success"}>
                    Login
                </Button>
                <h4 className='text-center font-bold'>OR</h4>
                <Button><FaGoogle className='mr-2' /> Login with Google</Button>

                <p className='text-sm font-semibold'>Don't have any Account? <Link to='/register' className="text-blue-600 hover:underline">Register</Link> </p>
            </form>
        </div>
    );
};

export default Login;