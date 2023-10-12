import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactMe() {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className=' text-blue-600'>CONTACT</div>
                <div>Mail</div>
                <p><FontAwesomeIcon icon={faEnvelope} /> Ayushthapa0010@gmail.com</p>

            </div>
        </>
    )
}
