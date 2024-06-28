import { faArrowTurnDown, faEnvelope, faHandPointDown, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub, faLinkedin);

export default function ContactMe() {
    const email = 'ayushthapa0010@gmail.com';
    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`
    };

    const handlePhoneClick=()=>{
        window.location.href = 'tel:9845998964';
    };
    return (
        <>
            <div className='flex flex-col items-center bg-gray-50 cursor-pointer'>
                <div className=' text-blue-500 text-3xl mt-12'>CONTACT <FontAwesomeIcon icon={faArrowTurnDown} /></div>
                <p
                    className='mt-5 hover:underline'
                    onClick={handleEmailClick}
                ><FontAwesomeIcon icon={faEnvelope} className=' text-red-600' /> Ayushthapa0010@gmail.com</p>
                <p
                    className='mt-5 hover:underline'
                    onClick={handlePhoneClick}
                ><FontAwesomeIcon icon={faPhone} className=' text-red-600' /> 9845998964</p>
                <a className='mt-5 hover:underline' href="https://www.linkedin.com/in/ayush-thapa-106655300/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='text-red-600' icon={['fab', 'linkedin']} /> linkedin
                </a>
                <a className='mt-5 mb-5 hover:underline'
                href="https://github.com/Ayush945" 
                target="_blank" 
                rel="noopener noreferrer">
                    <FontAwesomeIcon className='text-red-600' icon={['fab', 'github']} /> Gitub
                </a>
            </div>
        </>
    )
}
