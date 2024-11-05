import React from 'react';
import htmlLogo from '../Image/Html.png';
import jsLogo from '../Image/Javascript.png';
import nextjsLogo from '../Image/nextjsicon.png'
import reactLogo from '../Image/React.png';
import tailwindLogo from '../Image/Tailwind.png';
import springLogo from '../Image/Spring.png';
import oracleLogo from '../Image/Oracle.png';
import postgresLogo from '../Image/Postgres.png';
import JavaLogo from '../Image/Java.png';
import jiraLogo from '../Image/Jira.png';
import githubLogo from '../Image/Github.png';
import postmanLogo from '../Image/Postman.png';

function SecondComponent() {
    const frontSkills = [
        { name: 'HTML', logo: htmlLogo },
        { name: 'TailwindCSS', logo: tailwindLogo },
        { name: 'React', logo: reactLogo },
        { name: 'Nextjs', logo: nextjsLogo },
    ];

    const backSkills = [
        { name: 'Spring Boot', logo: springLogo },
        { name: 'Oracle Apex', logo: oracleLogo },
        { name: 'Postgres', logo: postgresLogo },
        { name: 'Java', logo: JavaLogo }
    ];

    const miscSkills = [
        { name: 'Jira', logo: jiraLogo },
        { name: 'Github', logo: githubLogo },
        { name: 'Postman', logo: postmanLogo }
    ];

    return (
        <div className='min-h-screen cursor-pointer mt-10 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl sm:text-4xl text-center mb-10 font-bold'>Tech Stack</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div>
                    <h1 className='text-2xl text-center sm:text-3xl mb-6 font-semibold'>Frontend</h1>
                    {frontSkills.map((skill, index) => (
                        <div className='flex flex-col items-center mb-6' key={index}>
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className='h-20 w-20 sm:h-24 sm:w-24 p-2 sm:p-4 hover:scale-125 transition-transform duration-500'
                            />
                            <p className='mt-2 text-lg'>{skill.name}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h1 className='text-2xl text-center sm:text-3xl mb-6 font-semibold'>Backend</h1>
                    {backSkills.map((skill, index) => (
                        <div className='flex flex-col items-center mb-6' key={index}>
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className='h-20 w-20 sm:h-24 sm:w-24 p-2 sm:p-4 hover:scale-125 transition-transform duration-500'
                            />
                            <p className='mt-2 text-lg'>{skill.name}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h1 className='text-2xl text-center sm:text-3xl mb-6 font-semibold'>Misc.</h1>
                    {miscSkills.map((skill, index) => (
                        <div className='flex flex-col items-center mb-6' key={index}>
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className='h-20 w-20 sm:h-24 sm:w-24 p-2 sm:p-4 hover:scale-125 transition-transform duration-500'
                            />
                            <p className='mt-2 text-lg'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SecondComponent;
