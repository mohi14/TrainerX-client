import React from 'react';
import logo1 from '../../../assets/logo1.png'
import logo2 from '../../../assets/logo2.png'
import logo3 from '../../../assets/logo3.png'
import logo4 from '../../../assets/logo4.png'

const Tips = () => {
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold ml-10 lg:ml-16 my-7 text-center'>Tips for Healthy life</h2>
            <div className='w-4/5 m-auto grid grid-cols-1 lg:grid-cols-4 gap-4 '>
                <div className='border-2 p-4 rounded-lg hover:border-green-700'>
                    <img src={logo1} alt="" className='w-[80px] m-auto mt-10 mb-5' />
                    <h4 className='text-center text-xl font-bold mb-4'>Eat Healthy Food</h4>
                    <p className='text-center mb-6 text-lg'>How all this mistaken idea of denouncing pleasures and praising our work.</p>
                </div>
                <div className='border-2 p-4 rounded-lg hover:border-green-700'>
                    <img src={logo3} alt="" className=' w-[130px] m-auto mt-10 mb-7 ' />
                    <h4 className='text-center text-xl font-bold mb-4'>Exercise Regularly</h4>
                    <p className='text-center mb-6 text-lg'>Complete account of system & expounds the actually master explorer.</p>
                </div>
                <div className='border-2 p-4 rounded-lg hover:border-green-700'>
                    <img src={logo2} alt="" className=' w-[80px] m-auto mt-10 mb-5 ' />
                    <h4 className='text-center text-xl font-bold mb-4'>Avoiding Bad Habits</h4>
                    <p className='text-center mb-6 text-lg'>Expounds the actual teaching that great explorer of there level on builder won.</p>
                </div>
                <div className='border-2 p-4 rounded-lg hover:border-green-700'>
                    <img src={logo4} alt="" className='w-[80px] m-auto mt-10 mb-5 ' />
                    <h4 className='text-center text-xl font-bold mb-4'>Follow Good Hygiene</h4>
                    <p className='text-center mb-6 text-lg'>Denouncing pleasure praising pain born will completed of the system</p>
                </div>
            </div>
        </div>
    );
};

export default Tips;