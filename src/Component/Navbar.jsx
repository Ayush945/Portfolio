import React from 'react';

function Navbar() {
    // Function to scroll to a specific vertical offset
    const scrollToOffset = (offset) => {
        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className='flex justify-between p-6 cursor-pointer sticky top-0 z-10'>
                <div
                    className='text-3xl'
                    onClick={() => scrollToOffset(0)}
                >
                    <p> 𝒜</p>
                </div>
                <div className='flex gap-6 cursor-pointer'>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToOffset(0)}
                    >
                        Home
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToOffset(890)}
                    >
                        About
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToOffset(1600)} // Scroll to a specific offset (e.g., 1000 pixels from the top)
                    >
                        Tech Stack
                    </p>
                    <p
                        className='border rounded-lg p-2 hover.bg-black hover.text.white'
                        onClick={() => scrollToOffset(2400)} // Scroll to a specific offset (e.g., 1500 pixels from the top)
                    >
                        Portfolio
                    </p>
                    <p
                        className='border rounded-lg p-2 hover.bg-black hover.text.white'
                        onClick={() => scrollToOffset(2800)} // Scroll to a specific offset (e.g., 2000 pixels from the top)
                    >
                        Contact
                    </p>
                </div>
            </div>
        </>
    );
}

export default Navbar;
