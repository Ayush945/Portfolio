import React from 'react';
import profilePic from '../Image/unnamed.png';


function FirstComponent() {
    return (
        <div className=' sm:px-4'>
            <div className='flex justify-center items-center min-h-screen gap-10'>
                <div className='font-semibold italic cursor-pointer hover:scale-105 transition-transform duration-500'>
                    <h1 className='text-6xl md:text-9xl transition-all duration-500'>Ayush</h1>
                    <h1 className='text-6xl md:text-9xl transition-all duration-500'>Thapa</h1>
                </div>
                <div>
                    <img
                        className='w-40 h-40 rounded-full overflow-hidden border-2 border-black hover:scale-105 transition-transform duration-500'
                        src={profilePic}
                        alt='Profile'
                    />
                </div>
            </div>
        </div>
    );
}

export default FirstComponent;
