import React, { useRef, useState } from 'react';
import FirstComponent from './FirstComponent';
import AboutMe from './AboutMe';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import ContactMe from './ContactMe';
import logo from '../Image/LogoA.png'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className='flex justify-between items-center p-6 cursor-pointer sticky top-0 z-10 bg-white shadow-md w-full'>
                <div
                    className='text-3xl'
                    onClick={() => scrollToRef(homeRef)}
                >
                    <p>
                        <img
                        src={logo}
                        alt='logo'
                        className=' w-20 h-20'
                        />
                    </p>
                </div>
                <div className='hidden md:flex gap-6'>
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
                        onClick={() => scrollToRef(techRef)}
                    >
                        Tech Stack
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToRef(portfolioRef)}
                    >
                        Projects
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => scrollToRef(contactRef)}
                    >
                        Contact
                    </p>
                </div>
                <div className='md:hidden'>
                    <button className='p-2 border rounded-md' onClick={toggleMenu}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className='md:hidden flex flex-col gap-4 p-4'>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => {scrollToRef(homeRef); toggleMenu();}}
                    >
                        Home
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => {scrollToRef(aboutRef); toggleMenu();}}
                    >
                        About
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => {scrollToRef(techRef); toggleMenu();}}
                    >
                        Tech Stack
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => {scrollToRef(portfolioRef); toggleMenu();}}
                    >
                        Projects
                    </p>
                    <p
                        className='border rounded-lg p-2 hover:bg-black hover:text-white'
                        onClick={() => {scrollToRef(contactRef); toggleMenu();}}
                    >
                        Contact
                    </p>
                </div>
            )}

            <div ref={homeRef} className='w-full'>
                <FirstComponent />
            </div>
            <div ref={aboutRef} className='w-full'>
                <AboutMe />
            </div>
            <div ref={techRef} className='w-full'>
                <SecondComponent />
            </div>
            <div ref={portfolioRef} className='w-full'>
                <ThirdComponent />
            </div>
            <div ref={contactRef} className='w-full'>
                <ContactMe />
            </div>
        </>
    );
}

export default Navbar;
