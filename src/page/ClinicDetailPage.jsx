import React from 'react'
import { Link } from 'react-router-dom';
import { faArrowLeft, faDirections } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ClinicDetailPage() {
    return (
        <div className="container mx-auto p-4">
            <h2 className='text-2xl font-bold mb-4 text-center'>AllWell Clinic</h2>

            <h2 className="text-2xl font-bold mb-4">Project Background:</h2>
            <p className="text-base">
                During an intensive bootcamp organized by EdLab and The British College, you had the opportunity to participate in a dynamic and hands-on project. This project focused on developing a fully functional website for a local clinic situated in Budhabare, Dhankuta. The task was not only to build the website but also to gain valuable experience in web development and collaboration within a team setting.
            </p>

            <h2 className="text-2xl font-bold my-4">Team Collaboration:</h2>
            <p className="text-base">
                Team consisted of six members, each contributing to different aspects of the project. This collaborative approach was vital to ensure that both the frontend and backend were well-developed. The team was divided into two groups: three members worked on the frontend using React, while the other three focused on backend development using Spring Boot.
            </p>

            <h2 className="text-2xl font-bold my-4">Primary Actors and Features:</h2>
            <p className="text-base">
                The website had three primary user roles: Admin, Doctor, and Patient.
                - Admin: Responsible for registering doctors and had access to data related to the site, doctors, and patients.
                - Doctor: Capable of logging in, viewing appointments, checking news, seeing past appointments, and accessing statistics.
                - Patient: Had the ability to log in, register, book appointments, thereby enhancing the overall convenience of their experience. They could also check the latest news related to the clinic, view their past appointments, and maintain an updated profile.
            </p>

            <h2 className="text-2xl font-bold my-4">Project Timeline:</h2>
            <p className="text-base">
                Impressively, the team was able to deliver a fully functional website in a remarkably short timeframe, completing the project in just three weeks. This achievement underscores the team's dedication, effective project management, and their collective skills in React and Spring Boot.
            </p>
            <p className="mt-10 font-bold text-3xl">For Images: Check our Figma</p>

            <button
                className=' bg-red-700 p-2 rounded-lg mt-4 hover:bg-red-400 text-white'
                onClick={() => {
                    window.open('https://www.figma.com/file/jsXZgWIbJRzDjLDlViNf9v/Untitled?type=design&node-id=0-1&mode=design&t=E9GVUwIXEmFuGHtk-0');
                }}>Figma</button>
            <div className='mb-10 mt-10'>
                <p>Go back</p>
                <Link to={'/'}> <FontAwesomeIcon icon={faArrowLeft} /></Link>
            </div>
        </div>
    );
}
