import React from 'react';
import solo from '../Image/soloimage.png';
import musicPic from '../Image/MusicAcademy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

const soloProjects = [
  {
    id: 1,
    name: "Car Rental",
    image: solo,
    desc: "Car rental website to book a car for a vacation",
    tech: "React, tailwindcss",
    github: "https://github.com/Ayush945/Project-Portfolio",
    live: "https://shimmering-stardust-0197cd.netlify.app/",
  },
  {
    id: 2, 
    name: "Music Academy",
    image: musicPic,
    desc: "Music Academy website to learn music for beginners",
    tech: "Acernity UI, Nextjs, tailwindcss",
    github: "https://github.com/Ayush945/music-academy",
    live: "https://music-academy-q41b7hwet-ayush945s-projects.vercel.app/",
  },
];

function SoloProject() {
  return (
    <div className='p-4 sm:p-8 bg-slate-50'>
      <div className='pb-10 pt-10'>
        <div>
          <h1 className='text-xl font-semibold text-center'>Solo Projects</h1>
        </div>
      </div>
      {soloProjects.map((project) => (
        <div key={project.id} className='flex flex-col lg:flex-row justify-center gap-12 mt-10 pb-10 px-4 md:px-10'>
          <div className='flex-shrink-0'>
            <img
              src={project.image}
              alt={`${project.name} image`}
              className='h-auto w-full lg:w-[250px] lg:h-[300px] object-cover'
            />
          </div>
          <div className='max-w-full lg:max-w-lg'>
            <h1 className='text-xl text-red-500'>{project.name}</h1>
            <p>{project.desc}</p>
            <p className='mt-10 text-blue-500'>Tech Stack:</p>
            <p>{project.tech}</p>
            <div className='flex flex-col sm:flex-row gap-4 mt-10'>
              <button
                className='p-2 sm:p-1 shadow-lg bg-blue-500 text-white rounded-sm hover:bg-blue-700 text-sm sm:text-xs'
                onClick={() => window.open(project.github, '_blank')}
              >
                Source Code <FontAwesomeIcon icon={faArrowTurnUp} />
              </button>
              <button
                className='p-2 sm:p-1 shadow-lg bg-blue-500 text-white rounded-sm hover:bg-blue-700 text-sm sm:text-xs'
                onClick={() => window.open(project.live, '_blank')}
              >
                Live Demo <FontAwesomeIcon icon={faArrowTurnUp} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SoloProject;
