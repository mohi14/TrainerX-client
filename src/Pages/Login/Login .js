import { Button, Label, TextInput, Toast } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('')

    const { logInUser, googleSignInUser, setLoading, user } = useContext(AuthContext)


    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success(`Welcome back ${user?.displayName}`)
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
                toast.error('Your Email/Password is not correct')

            })
            .finally(() => {
                setLoading(false)
            }
            )
    };

    const handleGoogleSignIn = () => {
        googleSignInUser()
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success(`Welcome back ${user?.displayName}`)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className='max-w-xs lg:max-w-xl m-auto mt-20 p-10 lg:py-16 lg:px-20 bg-slate-50 shadow-lg rounded-lg'>
            <p className='text-center text-3xl font-bold mb-4'>Please Login!</p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                        name='email'
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
                        name='password'
                        required={true}
                        shadow={true}
                    />
                </div>
                <Button type="submit" color={"success"}>
                    Login
                </Button>
                <h4 className='text-center font-bold'>OR</h4>
                <Button onClick={handleGoogleSignIn}><FaGoogle className='mr-2' /> Login with Google</Button>

                <p className='text-sm font-semibold'>Don't have any Account? <Link to='/register' className="text-blue-600 hover:underline">Register</Link> </p>
                <p className='mt-3 text-red-600'>{error}</p>
            </form>
        </div>
    );
};

export default Login;