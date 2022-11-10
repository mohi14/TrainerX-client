import React, { useContext, useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../others/useTitle/useTitle';

const Register = () => {
    useTitle('Register')
    const [error, setError] = useState('')
    const { emailPasswordSignUpUser, updateUserProfile, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const [accepted, setAccepted] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        emailPasswordSignUpUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                setError('');
                const currentUser = {
                    email: user.email
                }
                //get jwt token
                fetch(' https://trainerx-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('trainerX-Token', data.token)
                        navigate('/')
                        toast.success("Registration Successful! Thank You.")
                    })


            })
            .catch(error => {
                console.error(error)
                setError(error.message)
                toast.error('Opps!!Something went wrong. Try Again.')
            })
            .finally(() => {
                setLoading(false)
            })
    };

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => { console.error(error) })
            .finally(() => {
                setLoading(false)
            })

    }
    return (
        <div className='max-w-xs lg:max-w-xl m-auto mt-20 p-10 lg:py-16 lg:px-20 bg-slate-50 shadow-lg rounded-lg'>
            <p className='text-center text-3xl font-bold mb-4'>Please Register!</p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                        name='name'
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo2"
                            value="Your photoURL"
                        />
                    </div>
                    <TextInput
                        id="photo2"
                        type="text"
                        placeholder="Enter your photoURL"
                        name='photoURL'
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
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" onClick={handleAccepted} />
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
                <Button type="submit" color={"success"} disabled={!accepted}>
                    Register
                </Button>

                <p className='text-sm font-semibold'>Already have an Account? <Link to='/login' className="text-blue-600 hover:underline">Login</Link> </p>
                <p className='mt-3 text-red-600'>{error}</p>
            </form>
        </div>
    );
};

export default Register;