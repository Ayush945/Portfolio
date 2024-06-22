import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft, faDirections } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ClinicDetailPage() {
    return (
        <div className="container mx-auto p-4">
            <h2 className='text-4xl font-bold mb-8  text-center text-gray-800'>AllWell Clinic</h2>

            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Project Background:</h2>
            <p className="text-lg mb-6 text-gray-600">
                During an intensive bootcamp organized by EdLab and The British College, you had the opportunity to participate in a dynamic and hands-on project. This project focused on developing a fully functional website for a local clinic situated in Budhabare, Dhankuta. The task was not only to build the website but also to gain valuable experience in web development and collaboration within a team setting.
            </p>

            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Team Collaboration:</h2>
            <p className="text-lg mb-6 text-gray-600">
                The team consisted of six members, each contributing to different aspects of the project. This collaborative approach was vital to ensure that both the frontend and backend were well-developed. The team was divided into two groups: three members worked on the frontend using React, while the other three focused on backend development using Spring Boot.
            </p>

            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Primary Actors and Features:</h2>
            <p className="text-lg mb-6 text-gray-600">
                The website had three primary user roles: Admin, Doctor, and Patient.
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Admin: Responsible for registering doctors and had access to data related to the site, doctors, and patients.</li>
                    <li>Doctor: Capable of logging in, viewing appointments, checking news, seeing past appointments, and accessing statistics.</li>
                    <li>Patient: Had the ability to log in, register, book appointments, thereby enhancing the overall convenience of their experience. They could also check the latest news related to the clinic, view their past appointments, and maintain an updated profile.</li>
                </ul>
            </p>

            <h2 className="text-3xl font-semibold mb-6 text-gray-700">Project Timeline:</h2>
            <p className="text-lg mb-6 text-gray-600">
                Impressively, the team was able to deliver a fully functional website in a remarkably short timeframe, completing the project in just three weeks. This achievement underscores the team's dedication, effective project management, and their collective skills in React and Spring Boot.
            </p>
            <p className="mt-10 font-bold text-3xl text-center text-gray-800">For Images: Check our Figma</p>

            <div className="flex justify-center mt-4">
                <button
                    className='bg-red-700 p-3 rounded-lg hover:bg-red-500 text-white text-lg'
                    onClick={() => {
                        window.open('https://www.figma.com/file/jsXZgWIbJRzDjLDlViNf9v/Untitled?type=design&node-id=0-1&mode=design&t=E9GVUwIXEmFuGHtk-0');
                    }}>Figma</button>
            </div>
            <div className='mt-10 flex justify-center items-center space-x-2'>
                <p className="text-lg text-gray-600">Back to portfolio</p>
                <Link to={'/'} className="text-red-700 hover:text-red-500"><FontAwesomeIcon icon={faArrowLeft} />
               </Link>
            </div>
        </div>
    );
}
