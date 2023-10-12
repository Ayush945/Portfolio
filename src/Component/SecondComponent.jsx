import React, { useState } from 'react'
import htmlLogo from '../Image/Html.png';

import jsLogo from '../Image/Javascript.png';
import reactLogo from '../Image/React.png';
import tailwindLogo from '../Image/Tailwind.png';

import springLogo from '../Image/Spring.png';
import oracleLogo from '../Image/Oracle.png';
import postgresLogo from '../Image/Postgres.png'
import JavaLogo from '../Image/Java.png'
import jiraLogo from '../Image/Jira.png';
import githubLogo from '../Image/Github.png'
import postmanLogo from '../Image/Postman.png';
function SecondComponent() {

    const frontSkills = [
        { name: 'HTML', logo: htmlLogo },
        { name: 'JavaScript', logo: jsLogo },
        { name: 'TailwindCSS', logo: tailwindLogo },
        { name: 'React', logo: reactLogo }

    ]

    const backSkills = [
        { name: 'Spring Boot', logo: springLogo },
        { name: 'Oracle Apex', logo: oracleLogo },
        { name: 'Postgres', logo: postgresLogo },
        { name: 'Java', logo: JavaLogo }
    ]
    const miscSkills = [
        { name: 'Jira', logo: jiraLogo },
        { name: 'Github', logo: githubLogo },
        { name: 'Postman', logo: postmanLogo }

    ]
    return (
        <>
            <div className='min-h-screen cursor-pointer'>
                <h1 className='text-4xl text-center mb-20 font-bold'>Tech Stack</h1>
                <div className='flex justify-around'>

                    <div>
                        <h1 className='text-4xl mb-10'>Frontend</h1>
                        {frontSkills.map((skill, index) => (
                            <div
                                className='flex flex-col items-center'
                                key={index}>
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className='h-24 w-24 p-4 hover:scale-125 transition-transform duration-500' />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h1 className='text-4xl mb-10'>Backend</h1>
                        {backSkills.map((skill, index) => (
                            <div
                                className='flex flex-col items-center'
                                key={index}>
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className='w-24 h-24 p-4 hover:scale-125 transition-transform duration-500'
                                />
                                <p>{skill.name}</p>

                            </div>
                        ))}
                    </div>
                    <div >
                        <h1 className='text-4xl mb-10'>Misc.</h1>

                        {miscSkills.map((skill, index) => (
                            <div className='flex flex-col items-center'
                                key={index}>
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className='w-24 h-24 p-4 hover:scale-125 transition-transform duration-500' />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondComponent