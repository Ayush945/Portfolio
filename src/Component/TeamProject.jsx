import React, { useState } from 'react';
import clinicImg from '../Image/ClinicPic.png';
import FoodImg from '../Image/FoodApp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCaretDown, faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

function TeamProject() {
    const [showDropdown, setShowDropdown] = useState({});

    const teamProjects = [
        {
            picture: clinicImg,
            name: 'AllWell Clinic',
            tech: 'React, Postman, Chakra, API testing, Spring boot, Unit Testing',
            frontend: "https://github.com/DiwashBhatta17/allwell_clinic",
            backend: "https://github.com/Ayush945/SpringBootProject",
            figma: 'https://www.figma.com/file/jsXZgWIbJRzDjLDlViNf9v/Untitled?type=design&node-id=0-1&mode=design&t=E9GVUwIXEmFuGHtk-0',
            detail: "clinic where patient can book appointment."
        },
        {
            picture: FoodImg,
            name: 'Newa Express',
            tech: 'React, Postman, Material UI, API testing, Spring boot, Unit Testing',
            frontend: "https://github.com/DiwashBhatta17/Newa_express",
            backend: "https://github.com/Kiryui13/foodapp",
            figma: 'https://www.figma.com/file/9qIDDgJFWmGqvCjL9jJnjh/Foodapp?type=design&node-id=0-1&mode=design&t=lFNTL6EbhrA3FACM-0',
            detail: "customer to order authentic newari foods."
        }
    ];

    const toggleDropdown = (index) => {
        setShowDropdown((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className='min-h-screen cursor-pointer mt-8 bg-slate-100'>
            <div className='flex flex-col items-center'>
                <div className='font-bold text-4xl p-10'>Projects</div>
                <div className='font-semibold text-xl p-10 '>Team Projects</div>

                <div className='flex flex-col'>
                    {teamProjects.map((project, index) => (
                        <div key={index} className='flex flex-col md:flex-row items-start gap-10 mb-24'>
                            <div className='flex-shrink-0'>
                                <img src={project.picture} alt='clinic' className='h-[300px] w-[250px]' />
                            </div>
                            <div className='flex flex-col'>
                                <p className=' text-red-700 text-xl'>{project.name}</p>
                                <p className=' mt-7'>Worked on a team to build Full stack web application for</p>
                                <p>{project.detail}</p>
                                <span className='text-blue-700 mt-7'>Tech:</span>
                                <p>{project.tech}</p>
                                <div className='flex flex-col sm:flex-row gap-10 mt-20'>
                                    <button
                                        className='bg-blue-500 text-white px-4 py-1 hover:bg-blue-700'
                                        onClick={() => { window.open(project.figma, '_blank') }}
                                    >
                                        Figma <FontAwesomeIcon icon={faArrowTurnUp} />
                                    </button>
                                    <div className='relative'>
                                        <button
                                            className='bg-blue-500 text-white  px-4 py-1 hover:bg-blue-700'
                                            onClick={() => toggleDropdown(index)}
                                        >
                                            Source Code <FontAwesomeIcon icon={faCaretDown} />
                                        </button>

                                        {showDropdown[index] && (
                                            <div className='absolute top-full left-0 mt-2 border border-gray-300 rounded p-2' style={{ width: '100%' }}>
                                                <p className='text-blue-600 cursor-pointer hover:underline text-center' onClick={() => { window.open(project.frontend, '_blank') }}>Frontend</p>
                                                <div className='border-t border-gray-300 my-2'></div>
                                                <p className='text-blue-600 cursor-pointer hover:underline text-center' onClick={() => { window.open(project.backend, '_blank') }}>Backend</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamProject;
