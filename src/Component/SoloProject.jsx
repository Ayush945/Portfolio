import React from 'react'
import solo from '../Image/soloimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnUp, faArrowUp } from '@fortawesome/free-solid-svg-icons'
function SoloProject() {
    return (
        <>
            <div className='pb-10 pt-10 bg-slate-50'>
                <div>
                    <h1 className='text-3xl text-center'>Solo Projects</h1>
                </div>
            </div>

            <div className='flex justify-center gap-12 mt-10 pb-10' >
                <div>
                    <img
                        src={solo}
                        alt='car rental'
                        className='h-[300px] w-[250px]'
                    />
                </div>
                <div>
                    <h1 className=' text-xl text-red-500'>Car Rental</h1>
                    <p>Landing page for a car rental website</p>
                    <p className='mt-10 text-blue-500'>Tech Stack:</p>
                    <p> React TailwindCSS</p>
                    <div className='flex gap-8 mt-10'>
                        <button
                            className='p-2 shadow-lg bg-blue-500 text-white rounded-sm'
                            onClick={() => window.open('https://github.com/Ayush945/Project-Portfolio', '_blank')}
                        >Source Code</button>
                        <button
                            className='p-2 shadow-lg bg-blue-500 text-white rounded-sm'
                            onClick={() => window.open('https://shimmering-stardust-0197cd.netlify.app/', '_blank')}
                        >
                            Live Demo <FontAwesomeIcon icon={faArrowTurnUp} /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoloProject