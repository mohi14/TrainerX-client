import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='max-w-xs lg:max-w-xl m-auto mt-20 p-10 lg:py-16 lg:px-20 bg-slate-50 shadow-lg rounded-lg'>
            <p className='text-center text-3xl font-bold mb-4'>Please Register!</p>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name2"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="name2"
                        type="text"
                        placeholder="Enter your name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="photo2"
                        type="text"
                        placeholder="Enter your photoURL"
                        shadow={true}
                    />
                </div>
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
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree">
                        I agree with the{' '}
                        <a
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button type="submit" color={"success"}>
                    Register
                </Button>

                <p className='text-sm font-semibold'>Already have an Account? <Link to='/login' className="text-blue-600 hover:underline">Login</Link> </p>
            </form>
        </div>
    );
};

export default Register;