import React from 'react';
import clinicImg from '../Image/ClinicPic.png';
import FoodImg from '../Image/FoodApp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ThirdComponent() {
    const teamProjects = [
        { picture: clinicImg, name: 'AllWell Clinic', navigate: '/clinic-detail' },
        { picture: FoodImg, name: 'Newa Express', navigate: '/delivery-detail' }
    ];
    const singleProjects = [

    ]

    return (
        <div className='min-h-screen cursor-pointer mt-8'>
            <div className='flex justify-center font-bold text-4xl'>
                <h1>Portfolio</h1>
            </div>

            <div className='flex flex-col items-center'>
                <div className='font-semibold text-xl p-10'>Team Projects</div>

                <div className='flex flex-col'>
                    {teamProjects.map((project, index) => (
                        <div

                            key={index} className='flex items-center gap-10 mb-24'>
                            <div className=''>
                                <img src={project.picture} alt='clinic' className=' h-[300px] w-[250px]' />
                            </div>
                            <div className='flex flex-col'>
                                <p >Title: {project.name}</p>
                                <p className='mt-10'>Worked on team to build this project,</p>
                                <p>To know more about it click on detail</p>
                                <div className='flex gap-10 mt-20'>
                                    <Link to={project.navigate}> <button className='bg-blue-500 text-white rounded-lg px-4 py-1 hover:bg-blue-700'>Detail</button></Link>
                                    <button className='bg-blue-500 text-white rounded-lg px-4 py-1 hover:bg-blue-700'>Source Code</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='font-semibold text-xl p-10'>Solo Projects</div>
                <div className='flex flex-col'>
                    {singleProjects.map((sproject, index) => (
                        <div

                            key={index} className='flex items-center gap-10 mb-24'>
                            <div className=''>
                                <img src={sproject.picture} alt='clinic' className=' h-[300px] w-[250px]' />
                            </div>
                            <div className='flex flex-col'>
                                <p >Title: {sproject.name}</p>
                                <p className='mt-10'>Build using pure react and tailwind</p>
                                <div className='flex gap-10 mt-20'>
                                    <Link to={sproject.navigate}> <button className='bg-blue-500 text-white rounded-lg px-4 py-1 hover:bg-blue-700'>Source Code</button></Link>
                                    <button className='bg-blue-500 text-white rounded-lg px-4 py-1 hover:bg-blue-700'>Live Demo</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ThirdComponent;
