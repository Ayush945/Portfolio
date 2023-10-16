import { faArrowTurnDown, faEnvelope, faHandPointDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactMe() {
    const email = 'ayushthapa0010@gmail.com';
    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`
    }
    return (
        <>
            <div className='flex flex-col items-center gap-5 bg-gray-50 cursor-pointer'>
                <div className=' text-blue-500 text-3xl mt-12'>CONTACT <FontAwesomeIcon icon={faArrowTurnDown} /></div>
                <div className='text-2xl'><FontAwesomeIcon icon={faEnvelope} className=' text-red-500' /> Mail </div>
                <p
                    className='mb-10 hover:underline'
                    onClick={handleEmailClick}
                >
                    <FontAwesomeIcon icon={faEnvelope} className=' text-red-600' /> Ayushthapa0010@gmail.com</p>

            </div>
        </>
    )
}
