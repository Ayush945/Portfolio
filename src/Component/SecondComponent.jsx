import React, { useState } from 'react'
import htmlLogo from '../Image/Html.png';
import cssLogo from '../Image/CSS.png';
import jsLogo from '../Image/Javascript.png';
import reactLogo from '../Image/React.png';
import tailwindLogo from '../Image/Tailwind.png';

import springLogo from '../Image/Spring.png';
import oracleLogo from '../Image/Oracle.png';
import postgresLogo from '../Image/Postgres.png'

import jiraLogo from '../Image/Jira.png';
import githubLogo from '../Image/Github.png'
function SecondComponent() {

    const frontSkills = [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: jsLogo },
        { name: 'Tailwind', logo: tailwindLogo },
        { name: 'React', logo: reactLogo }
    ]

    const backSkills = [
        { name: 'Spring', logo: springLogo },
        { name: 'Oracle', logo: oracleLogo },
        { name: 'Postgres', logo: postgresLogo }

    ]
    const miscSkills = [
        { name: 'Jira', logo: jiraLogo },
        { name: 'Github', logo: githubLogo }
    ]
    return (
        <>
            <div>
                <h1 className='text-4xl text-center mb-20'>Skills</h1>
                <div className='flex justify-around'>

                    <div>
                        <h1 className='text-4xl mb-10'>Frontend</h1>
                        {frontSkills.map((skill, index) => (
                            <p
                                className='flex flex-col items-center'
                                key={index}>
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className='h-24 w-24 p-4' />
                            </p>
                        ))}
                    </div>

                    <div>
                        <h1 className='text-4xl mb-10'>Backend</h1>
                        {backSkills.map((skill, index) => (
                            <p
                                className='flex flex-col items-center'
                                key={index}>
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className='w-24 h-24 p-4'
                                />

                            </p>
                        ))}
                    </div>
                    <div >
                        <h1 className='text-4xl mb-10'>Misc.</h1>

                        {miscSkills.map((skill, index) => (
                            <p className='flex flex-col items-center'
                                key={index}>
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className='w-24 h-24 p-4' />

                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondComponent