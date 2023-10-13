import React from 'react'

function Navbar() {
    return (
        <>
            <div className='flex justify-between p-6 cursor-pointer sticky top-0 z-10'>
                <div className=' text-3xl'>
                    <p> 𝒜</p></div>
                <div className='flex gap-6 cursor-pointer'>
                    <p className='border rounded-lg p-2 hover:bg-black hover:text-white'>Home</p>
                    <p className='border rounded-lg p-2 hover:bg-black hover:text-white'>About</p>
                    <p className='border rounded-lg p-2 hover:bg-black hover:text-white'>Tech Stack</p>
                    <p className='border rounded-lg p-2 hover:bg-black hover:text-white'>Portfolio</p>
                    <p className='border rounded-lg p-2 hover:bg-black hover:text-white'>Contact</p>
                </div>
            </div>
        </>
    )
}

export default Navbar