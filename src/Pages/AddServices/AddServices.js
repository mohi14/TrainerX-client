import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../others/useTitle/useTitle';

const AddServices = () => {
    useTitle('Add Services')
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const level = form.level.value;
        const duration = form.duration.value;
        const total_reviews = form.views.value;
        const image_url = form.photo.value;
        const details = form.details.value;

        const service = {
            title,
            level,
            duration,
            total_reviews,
            image_url,
            details
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('New Service Added successfully')
                    event.target.reset();
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='m-auto w-10/12 lg:w-3/4 px-6 lg:px-16 py-10 border-2 mb-20 mt-5 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold mb-7 border-b-2 border-[#FDBF1D] text-center w-3/4 m-auto pb-3'>Add a new service</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="title2"
                            value="Service title"
                        />
                    </div>
                    <TextInput
                        id="title2"
                        type="text"
                        placeholder="Put service title"
                        name='title'
                        required={true}
                        shadow={true}
                    />
                </div>
                <div id="select">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="level2"
                            value="Select level"
                        />
                    </div>
                    <Select
                        id="level2"
                        name='level'
                        required={true}
                    >
                        <option>
                            Beginner
                        </option>
                        <option>
                            Intermediate
                        </option>
                        <option>
                            Advance
                        </option>
                    </Select>
                </div>

                <div id="select">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="duration2"
                            value="Select duration"
                        />
                    </div>
                    <Select
                        id="duration2"
                        name='duration'
                        required={true}
                    >
                        <option>
                            4 weeks
                        </option>
                        <option>
                            5 weeks
                        </option>
                        <option>
                            6 weeks
                        </option>
                        <option>
                            7 weeks
                        </option>
                        <option>
                            8 weeks
                        </option>
                        <option>
                            9 weeks
                        </option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="views2"
                            value="Total views"
                        />
                    </div>
                    <TextInput
                        id="views2"
                        type="number"
                        placeholder="Put total views"
                        name='views'
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo2"
                            value="PhotoURL"
                        />
                    </div>
                    <TextInput
                        id="photo2"
                        type="text"
                        placeholder="Put photoURL"
                        name='photo'
                        required={true}
                        shadow={true}
                    />
                </div>

                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="details2"
                            value="Service details"
                        />
                    </div>
                    <Textarea
                        id="details2"
                        placeholder="Put service details..."
                        name='details'
                        required={true}
                        rows={4}
                    />
                </div>

                <Button type="submit"
                    className='lg:w-1/4 m-auto mt-5'
                    color={'success'}>
                    Add Service
                </Button>
            </form>
        </div>
    );
};

export default AddServices;