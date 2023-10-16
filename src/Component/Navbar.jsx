import React, { useRef } from 'react';
import FirstComponent from './FirstComponent';
import AboutMe from './AboutMe';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import ContactMe from './ContactMe';

function Navbar() {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const techRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToRef = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <div className='flex justify-between p-6 cursor-pointer sticky top-0 z-10'>
                <div
                    className='text-3xl'
                    onClick={() => scrollToRef(homeRef)}
                >
                    <p> 𝒜</p>
                </div>
                <div className='flex gap-6 cursor-pointer'>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToRef(homeRef)}
                    >
                        Home
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToRef(aboutRef)}
                    >
                        About
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToRef(techRef)} // Scroll to a specific offset (e.g., 1000 pixels from the top)
                    >
                        Tech Stack
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToRef(portfolioRef)} // Scroll to a specific offset (e.g., 1500 pixels from the top)
                    >
                        Portfolio
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToRef(contactRef)} // Scroll to a specific offset (e.g., 2000 pixels from the top)
                    >
                        Contact
                    </p>
                </div>
            </div>

            <div ref={homeRef}>
                <FirstComponent />
            </div>
            <div ref={aboutRef}>
                <AboutMe />
            </div>
            <div ref={techRef}>
                <SecondComponent />
            </div>
            <div ref={portfolioRef}>
                <ThirdComponent />
            </div>
            <div ref={contactRef}
            >
                <ContactMe />
            </div>

        </>
    );
}

export default Navbar;
